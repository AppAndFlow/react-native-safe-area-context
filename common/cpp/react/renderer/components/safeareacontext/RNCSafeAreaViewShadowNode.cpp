#include "RNCSafeAreaViewShadowNode.h"

#include <react/renderer/components/view/conversions.h>
#include <react/renderer/core/LayoutContext.h>
#include <yoga/Yoga.h>
#include <algorithm>

namespace facebook {
namespace react {

using namespace yoga;

extern const char RNCSafeAreaViewComponentName[] = "RNCSafeAreaView";

inline Style::Length valueFromEdges(
    Style::Length edge,
    Style::Length axis,
    Style::Length defaultValue) {
  if (edge.isDefined()) {
    return edge;
  }
  if (axis.isDefined()) {
    return axis;
  }
  return defaultValue;
}

inline float
getEdgeValue(std::string edgeMode, float insetValue, float edgeValue) {
  if (edgeMode == "off") {
    return edgeValue;
  } else if (edgeMode == "maximum") {
    return fmax(insetValue, edgeValue);
  } else {
    return insetValue + edgeValue;
  }
}

void RNCSafeAreaViewShadowNode::adjustLayoutWithState() {
  ensureUnsealed();

  auto &props = getConcreteProps();
  auto state =
      std::static_pointer_cast<const RNCSafeAreaViewShadowNode::ConcreteState>(
          getState());
  auto stateData = state->getData();
  auto edges = props.edges;

  // Get the current values for padding / margin. The only caveat here is that
  // percent values are not supported. Also might need to add support for start
  // / end.
  Style::Length top, left, right, bottom;
  if (props.mode == RNCSafeAreaViewMode::Padding) {
    auto defaultPadding = props.yogaStyle.padding(Edge::All);
    top = valueFromEdges(
        props.yogaStyle.padding(Edge::Top),
        props.yogaStyle.padding(Edge::Vertical),
        defaultPadding);
    left = valueFromEdges(
        props.yogaStyle.padding(Edge::Left),
        props.yogaStyle.padding(Edge::Horizontal),
        defaultPadding);
    bottom = valueFromEdges(
        props.yogaStyle.padding(Edge::Bottom),
        props.yogaStyle.padding(Edge::Vertical),
        defaultPadding);
    right = valueFromEdges(
        props.yogaStyle.padding(Edge::Right),
        props.yogaStyle.padding(Edge::Horizontal),
        defaultPadding);
  } else {
    auto defaultMargin = props.yogaStyle.margin(Edge::All);
    top = valueFromEdges(
        props.yogaStyle.margin(Edge::Top),
        props.yogaStyle.margin(Edge::Vertical),
        defaultMargin);
    left = valueFromEdges(
        props.yogaStyle.margin(Edge::Left),
        props.yogaStyle.margin(Edge::Horizontal),
        defaultMargin);
    bottom = valueFromEdges(
        props.yogaStyle.margin(Edge::Bottom),
        props.yogaStyle.margin(Edge::Vertical),
        defaultMargin);
    right = valueFromEdges(
        props.yogaStyle.margin(Edge::Right),
        props.yogaStyle.margin(Edge::Horizontal),
        defaultMargin);
  }

  top = Style::Length::points(getEdgeValue(
      edges.top, stateData.insets.top, top.value().unwrapOrDefault(0)));
  left = Style::Length::points(getEdgeValue(
      edges.left, stateData.insets.left, left.value().unwrapOrDefault(0)));
  right = Style::Length::points(getEdgeValue(
      edges.right, stateData.insets.right, right.value().unwrapOrDefault(0)));
  bottom = Style::Length::points(getEdgeValue(
      edges.bottom,
      stateData.insets.bottom,
      bottom.value().unwrapOrDefault(0)));

  auto &currentStyle = yogaNode_.style();
  if (props.mode == RNCSafeAreaViewMode::Padding) {
    if (currentStyle.padding(Edge::Top) != top ||
        currentStyle.padding(Edge::Left) != left ||
        currentStyle.padding(Edge::Right) != right ||
        currentStyle.padding(Edge::Bottom) != bottom) {
      currentStyle.setPadding(Edge::Top, top);
      currentStyle.setPadding(Edge::Left, left);
      currentStyle.setPadding(Edge::Right, right);
      currentStyle.setPadding(Edge::Bottom, bottom);
      yogaNode_.setDirty(true);
    }
  } else if (
      currentStyle.margin(Edge::Top) != top ||
      currentStyle.margin(Edge::Left) != left ||
      currentStyle.margin(Edge::Right) != right ||
      currentStyle.margin(Edge::Bottom) != bottom) {
    currentStyle.setMargin(Edge::Top, top);
    currentStyle.setMargin(Edge::Left, left);
    currentStyle.setMargin(Edge::Right, right);
    currentStyle.setMargin(Edge::Bottom, bottom);
    yogaNode_.setDirty(true);
  }
}

} // namespace react
} // namespace facebook
