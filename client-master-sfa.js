(function() {
    'use strict';

    /**
     * 【更新】
     * ・レコード編集画面で保存に成功した後のイベント
     * ・レコード一覧画面のインライン編集に成功したときのイベント
     */
    kintone.events.on(['app.record.edit.submit.success', 'mobile.app.record.edit.submit.success', 'app.record.index.edit.submit.success'], (e) => {
        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/3v5ib21/';
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
