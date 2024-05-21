(() => {
    'use strict';
    const subdomain = 'cinc-j.cybozu.com';
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/3v5i806/';
    
    const fieldCode = 'フィールドコード';

    /**
     * 【作成】
     * ・レコード追加画面で保存に成功した後のイベント
     */
    kintone.events.on(['app.record.create.submit.success', 'mobile.app.record.create.submit.success'], (event) => {
        console.log(event);
    });

    /**
     * 【更新】
     * ・レコード編集画面でフィールドの値を変更したときのイベント
     * ・レコード一覧画面のインライン編集でフィールドの値を変更したときのイベント
     */
    kintone.events.on([
        'app.record.edit.change.フィールドコード',
        'mobile.app.record.edit.change.フィールドコード',
        'app.record.index.edit.change.フィールドコード'
    ], (event) => {
        console.log(event);
    });


    kintone.events.on('app.record.detail.process.proceed', (e) => {
        if (e.nextStatus.value === '完了') {
            const thisUrl = `https://${subdomain}/k/${kintone.app.getId()}/show#record=${kintone.app.record.getId()}`;
            const payload = {
                text: `案件< ${thisUrl} |「 ${e.record[fieldCode].value} 」>が完了しました！`
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
        }
        return e;
    });
})();
