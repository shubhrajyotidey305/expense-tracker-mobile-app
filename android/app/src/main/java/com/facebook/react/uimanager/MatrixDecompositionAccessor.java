package com.facebook.react.uimanager;

// Exposes package-private MatrixDecompositionContext arrays to libraries outside the package.
public final class MatrixDecompositionAccessor {
  private MatrixDecompositionAccessor() {}

  public static double[] getTranslation(MatrixMathHelper.MatrixDecompositionContext ctx) {
    return ctx.translation;
  }

  public static double[] getRotation(MatrixMathHelper.MatrixDecompositionContext ctx) {
    return ctx.rotationDegrees;
  }

  public static double[] getScale(MatrixMathHelper.MatrixDecompositionContext ctx) {
    return ctx.scale;
  }

  public static double[] getPerspective(MatrixMathHelper.MatrixDecompositionContext ctx) {
    return ctx.perspective;
  }
}
