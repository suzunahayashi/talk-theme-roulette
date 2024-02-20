import { TalkThemeListModel } from "../model/_talkThemeListModel";
import { TalkThemeItemModel } from "../model/_talkThemeItemModel";

/**
 * TalkThemeRouletteアプリの実装
 */
const talkThemeRoulette = () => {
  /**
   * TalkThemeListModelの初期化
   */
  const talkThemeListModel = new TalkThemeListModel();

  /**
  * @type {Element} フォーム要素の取得
  */
  const formElement = document.querySelector("#js-theme-from");

  /**
  * @type {Element} 入力欄要素の取得
  */
  const inputElement = document.querySelector("#js-theme-form-input");

  /**
  * @type {Element} トークテーマリストのコンテナ要素の取得
  */
  const containerElement = document.querySelector("#js-theme-list");

  /**
   * @type {Element} トークテーマ表示要素の取得
   */
  const talkThemeDisplayElement = document.querySelector("#js-theme-display");

  /**
   * STARTボタンの取得
   */
  const startButtonElement = document.querySelector("#js-start-button");

  /**
   * STOPボタンの取得
   */
  const stopButtonElement = document.querySelector("#js-stop-button");

  // インターバル用の変数
  let rouletteInterval;

  /**
   * トークテーマリストの表示を更新
   */
  function updateTalkThemeList () {
    /**
     * @type {Element} トークテーマリストをまとめる
     */
    const talkThemeListElement = document.createElement('ul');
      // talkThemeItem要素を作成しulに追加
      const talkThemeItems = talkThemeListModel.getTalkThemeItems();
      talkThemeItems.forEach(item => {
        // トークテーマリストをまとめるList要素
        const talkThemeItemElement = createTalkThemeItemElement(item);
        talkThemeListElement.appendChild(talkThemeItemElement);
      });
    // トークテーマリストのコンテナ要素の中身を更新
    containerElement.innerHTML = '';
    containerElement.appendChild(talkThemeListElement);
  }

  talkThemeListModel.onChange(() => {
    updateTalkThemeList();
  });

  talkThemeListModel.emitChange();

  formElement.addEventListener("submit", (e) => {
    //本来のsubmitイベントの動作を止める
    e.preventDefault();
    // 新しいtalkThemeItemをListへ追加
    talkThemeListModel.addTalkTheme(new TalkThemeItemModel({
      title: inputElement.value,
      completed: false
    }));
    inputElement.value = "";
    updateTalkThemeList();
  });

  function createTalkThemeItemElement(item) {
    const talkThemeItemElement = document.createElement('li');
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = item.completed;
    checkboxElement.addEventListener('change', () => {
      talkThemeListModel.updateTalkTheme({
        id: item.id,
        completed: checkboxElement.checked
      });
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      talkThemeListModel.deleteTalkTheme(item.id);
    });

    const titleElement = document.createElement('span');
    titleElement.textContent = item.title;

    talkThemeItemElement.appendChild(checkboxElement);
    talkThemeItemElement.appendChild(titleElement);
    talkThemeItemElement.appendChild(deleteButton);

    return talkThemeItemElement;
  }

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomTheme() {
    const talkThemeItems = talkThemeListModel.getTalkThemeItems();
    const randomIndex = getRandomIndex(talkThemeItems.length);
    return talkThemeItems[randomIndex];
  }

  function startRoulette() {
    startButtonElement.disabled = true;
    
    rouletteInterval = setInterval(() => {
      const randomTheme = getRandomTheme();
      talkThemeDisplayElement.textContent = randomTheme.title;
    }, 100);
  }

  function stopRoulette() {
    startButtonElement.disabled = false;

    clearInterval(rouletteInterval);

    setTimeout(() => {
      const randomTheme = getRandomTheme();
      talkThemeDisplayElement.textContent = randomTheme.title;
    }, 500);
  }

  startButtonElement.addEventListener("click", startRoulette);
  stopButtonElement.addEventListener("click", stopRoulette);
}

export default talkThemeRoulette;
