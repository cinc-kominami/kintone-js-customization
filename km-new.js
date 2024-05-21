(function() {
    'use strict';

    /**
     * 【作成】
     * ・レコード追加画面で保存に成功した後のイベント
     */
    kintone.events.on(['app.record.create.submit.success', 'mobile.app.record.create.submit.success'], (e) => {

        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/11728247/3j0odjs/';
        const payload = e.record;
        /*
        const payload = {
            "Hubspot取引ID": e.record.Hubspot取引ID.value,
            "取引名": e.record.取引名.value,
            "フェーズ": e.record.フェーズ.value,
            "主担当": e.record.主担当.value,
            "初回商談日": e.record.初回商談日.value,
            "契約開始日": e.record.契約開始日.value,
            "契約期間": e.record.契約期間.value,
            "初期費用": e.record.初期費用.value,
            "月額費用": e.record.月額費用.value,
            "顧客区分": e.record.顧客区分.value,
            "商品種別": e.record.商品種別.value,
            "ファーストタッチ_オフラインソース_ドリルダウン": e.record.ファーストタッチ_オフラインソース_ドリルダウン.value,
            "KMリードソース計測1": e.record.KMリードソース計測1.value,
            "KMリードソース計測2": e.record.KMリードソース計測2.value,
            "KMリードソース計測3": e.record.KMリードソース計測3.value,
            "SNSリードソース計測1": e.record.SNSリードソース計測1.value,
            "SNSリードソース計測2": e.record.SNSリードソース計測2.value,
            "SNSリードソース計測3": e.record.SNSリードソース計測3.value,
            "商材": e.record.商材.value,
            "失注理由": e.record.失注理由.value,
            "失注理由_自由記述": e.record.失注理由_自由記述.value,
        };
        */
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
        return e;
    });

    /**
     * 【更新】
     * ・レコード編集画面で保存に成功した後のイベント
     * ・レコード一覧画面のインライン編集に成功したときのイベント
     */
    /*
    kintone.events.on(['app.record.edit.submit.success', 'mobile.app.record.edit.submit.success', 'app.record.index.edit.submit.success'], (event) => {
        https://hooks.zapier.com/hooks/catch/11728247/3vb2lh8/
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
    */
})();
