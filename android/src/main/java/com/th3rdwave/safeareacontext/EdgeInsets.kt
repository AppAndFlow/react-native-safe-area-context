package com.th3rdwave.safeareacontext

data class EdgeInsets(val top: Float, val right: Float, val bottom: Float, val left: Float) {
    override fun toString(): String {
        return "(top=${top}, right=${right}, bottom=${bottom}, left=${left})"
    }
}
