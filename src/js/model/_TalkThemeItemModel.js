// ユニークなIDを管理する変数
let talkThemeIdx = 0;

export class TalkThemeItemModel {
    /** @type {number} トークテーマアイテムのID */
    id;
    /** @type {string} トークテーマアイテムのタイトル */
    title;
    /** @type {boolean} トークテーマアイテムが完了済みならばtrue、そうでない場合はfalse */
    completed;

    /**
     * @param {{ title: string, completed: boolean }}
     */
    constructor({ title, completed }) {
        // idは連番となり、それぞれのインスタンス毎に異なるものとする
        this.id = talkThemeIdx++;
        this.title = title;
        this.completed = completed;
    }
}
