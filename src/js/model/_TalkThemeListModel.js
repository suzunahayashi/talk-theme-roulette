import { TalkThemeItemModel } from "./_talkThemeItemModel.js";
import { EventEmitter } from "./_eventEmitter.js";

export class TalkThemeListModel extends EventEmitter {
    #items;
    #callbacks;
    /**
     * @param {TalkThemeItemModel[]} [items] 初期アイテム一覧（デフォルトは空の配列）
     */
    constructor(items = []) {
        super();
        this.#items = items;
        this.#callbacks = [];
        this.defaultThemes();
    }

    defaultThemes() {
      this.addTalkTheme(new TalkThemeItemModel({ title: "今週末の予定は？または先週末は何をした？🏖", completed: false }));
      this.addTalkTheme(new TalkThemeItemModel({ title: "学生時代の部活は？", completed: false }));
      this.addTalkTheme(new TalkThemeItemModel({ title: "今まで行って良かった旅行先？", completed: false }));
      this.addTalkTheme(new TalkThemeItemModel({ title: "オススメのカフェやごはん屋さん🍴☕️", completed: false }));
      this.addTalkTheme(new TalkThemeItemModel({ title: "オススメの映画やドラマ、アニメ", completed: false }));
      this.emitChange();
    }

    /**
     * TodoItemの合計個数を返す
     * @returns {number}
     */
    getTotalCount() {
        return this.#items.length;
    }

    /**
     * 表示できるTalkThemeItemの配列を返す
     * @returns {TalkThemeItemModel[]}
     */
    getTalkThemeItems() {
        return this.#items;
    }

    /**
     * TalkThemeListの状態が更新されたときに呼び出されるリスナー関数を登録する
     * @param {Function} callback
     */
    onChange(callback) {
        this.addEventListener("change", callback);
        this.#callbacks.push(callback);
    }

    /**
     * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
     */
    emitChange() {
        this.emit("change");
        this.#callbacks.forEach(callback => {
          callback();
      });
    }

    /**
     * TalkThemeItemを追加する
     * @param {TalkThemeItemModel} talkthemeItem
     */
    addTalkTheme(talkthemeItem) {
        this.#items.push(talkthemeItem);
        this.emitChange();
    }

    /**
     * 指定した`id`のTalkThemeItemの`completed`を更新する
     * @param {object} updateData
     */
    updateTalkTheme(updateData) {
      const talkthemeItem = this.#items.find(item => item.id === updateData.id);
      if(talkthemeItem) {
        talkthemeItem.completed = updateData.completed;
          this.emitChange();
      }
    }

  /**
   * 指定したidのTalkThemeItemを削除する
   * @param {number} id
   */
  deleteTalkTheme(id) {
      this.#items = this.#items.filter(item => item.id !== id);
      this.emitChange();
  }
}
