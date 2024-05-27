(function() {
    'use strict';

    /**
     * 【更新】
     * ・レコード編集画面でフィールドの値を変更したときのイベント
     * ・レコード一覧画面のインライン編集でフィールドの値を変更したときのイベント
     */
    kintone.events.on([
        'app.record.edit.change.主担当',
        'mobile.app.record.edit.change.主担当',
        'app.record.index.edit.change.主担当',

        'app.record.edit.change.契約開始日',
        'mobile.app.record.edit.change.契約開始日',
        'app.record.index.edit.change.契約開始日',

        'app.record.edit.change.契約終了日',
        'mobile.app.record.edit.change.契約終了日',
        'app.record.index.edit.change.契約終了日',

        'app.record.edit.change.契約期間',
        'mobile.app.record.edit.change.契約期間',
        'app.record.index.edit.change.契約期間',

        'app.record.edit.change.TCV',
        'mobile.app.record.edit.change.TCV',
        'app.record.index.edit.change.TCV'
    ], (e) => {
        return e;
    });
})();
