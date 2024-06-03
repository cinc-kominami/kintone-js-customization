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
        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/2yz8qnv/';
        const payload = e.record;
        const headers = {
            'Content-Type': 'application/json'
        };
        kintone.proxy(webhookUrl, 'POST', headers, payload, (body, status, headers) => {
            if (status >= 200 && status < 300) {
                console.log('Success:', status, body);
            } else {
                console.error('Error:', status, body);
            }
        });
        return e;
    });
})();
