(function() {
    'use strict';

    /**
     * 【更新】
     * ・レコード編集画面でフィールドの値を変更したときのイベント
     * ・レコード一覧画面のインライン編集でフィールドの値を変更したときのイベント
     */
    kintone.events.on([
        'app.record.edit.change.CS担当者',
        'mobile.app.record.edit.change.CS担当者',
        'app.record.index.edit.change.CS担当者',

        'app.record.edit.change.契約開始日',
        'mobile.app.record.edit.change.契約開始日',
        'app.record.index.edit.change.契約開始日',

        'app.record.edit.change.契約期間',
        'mobile.app.record.edit.change.契約期間',
        'app.record.index.edit.change.契約期間',

        'app.record.edit.change.商品種別',
        'mobile.app.record.edit.change.商品種別',
        'app.record.index.edit.change.商品種別'
    ], (e) => {
        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/3v5i806/';
        const payload = e.record;
        const headers = {
            'Content-Type': 'application/json'
        };
        return new kintone.Promise((resolve, reject) => {
            kintone.proxy(webhookUrl, 'POST', {}, payload, (body, status, headers) => {
                if (status >= 200 && status < 300) {
                    console.log('Success:', status, body);
                    resolve(e);
                } else {
                    console.error('Error:', status, body);
                    reject(new Error('Webhook notification failed'));
                }
            });
        });
    });
})();
