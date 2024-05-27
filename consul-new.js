(function() {
    'use strict';

    /**
     * 【作成】
     * ・レコード追加画面で保存に成功した後のイベント
     */
    kintone.events.on(['app.record.create.submit.success', 'mobile.app.record.create.submit.success'], (e) => {
        return e;
    });

    /**
     * 【更新】
     * ・レコード編集画面で保存に成功した後のイベント
     * ・レコード一覧画面のインライン編集に成功したときのイベント
     */
    kintone.events.on(['app.record.edit.submit.success', 'mobile.app.record.edit.submit.success', 'app.record.index.edit.submit.success'], (e) => {
        return e;
    });
})();
