/**
 * 390px以下のデバイス向けにviewportを調整する関数。
 * 390pxより大きいデバイスでは、通常のviewport設定を使用。
 * 390px以下のデバイスでは、viewportの幅を390pxに固定。
 */
(() => {
  // viewportのmetaタグを取得
  const viewport = document.querySelector('meta[name="viewport"]');

  /**
   * viewportの設定を調整する関数。
   */
  const adjustViewport = () => {
    // ウィンドウの外部幅が390pxより大きい場合と390px以下の場合で、viewportの設定を変更
    const value =
      window.outerWidth > 390
        ? 'width=device-width,initial-scale=1'
        : 'width=390';

    // 現在のviewportの設定と新しい設定が異なる場合のみ、viewportを更新
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };

  // ウィンドウのサイズが変更されたときのイベントリスナーを追加
  window.addEventListener('resize', adjustViewport);

  // 初期化時にviewportを調整
  adjustViewport();
})();
