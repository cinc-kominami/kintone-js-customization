(function() {
    'use strict';

    /**
     * 【作成】
     * ・レコード追加画面で保存に成功した後のイベント
     */
    kintone.events.on(['app.record.create.submit.success', 'mobile.app.record.create.submit.success'], (e) => {

        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/3j0odjs/';
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

    /**
     * 【更新】
     * ・レコード編集画面で保存に成功した後のイベント
     * ・レコード一覧画面のインライン編集に成功したときのイベント
     */
    kintone.events.on(['app.record.edit.submit.success', 'mobile.app.record.edit.submit.success', 'app.record.index.edit.submit.success'], (e) => {

        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/3vb2lh8/';
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
