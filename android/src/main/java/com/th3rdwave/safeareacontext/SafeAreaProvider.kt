package com.th3rdwave.safeareacontext

import android.content.Context
import android.util.Log
import android.view.ViewGroup
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.facebook.react.views.view.ReactViewGroup

const val DEBUG = false 

typealias OnInsetsChangeHandler = (view: SafeAreaProvider, insets: EdgeInsets, frame: Rect) -> Unit

class SafeAreaProvider(context: Context?) : ReactViewGroup(context) {
  private var mInsetsChangeHandler: OnInsetsChangeHandler? = null
  private var mCurrentInsets: EdgeInsets = EdgeInsets(0.0f, 0.0f, 0.0f, 0.0f)

  init {
    ViewCompat.setOnApplyWindowInsetsListener(this) { _, insets ->
      val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())

      mCurrentInsets = EdgeInsets(
        systemBars.top.toFloat(),
        systemBars.left.toFloat(),
        systemBars.bottom.toFloat(),
        systemBars.right.toFloat())

      if (DEBUG) {
        Log.d("SafeAreaProvider", "calculated insets: $mCurrentInsets")
      }

      sendInsetValuesToJs()

      insets
    }
  }

  private fun sendInsetValuesToJs() {
    val insetsChangeHandler = mInsetsChangeHandler ?: return
    val frame = getFrame(rootView as ViewGroup, this) ?: return

    if (DEBUG) {
      Log.d("SafeAreaProvider",  "emitting updated insets: $mCurrentInsets")
    }

    insetsChangeHandler(this, mCurrentInsets, frame)
  }

  fun setOnInsetsChangeHandler(handler: OnInsetsChangeHandler?) {
    mInsetsChangeHandler = handler
    sendInsetValuesToJs()
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()

    if (DEBUG) {
      Log.d("SafeAreaProvider", "attached to window")
    }

    requestApplyInsets()
  }
}
