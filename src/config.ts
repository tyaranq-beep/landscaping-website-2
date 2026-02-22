// config.ts
// ここに全可変データを集約します。
// 以下の設定項目を各企業（クライアント）に合わせて書き換えるだけで、サイト全体が切り替わります。

export const siteConfig = {
    // 1. 基本会社情報
    company: {
        name: '【会社名プレースホルダー】',
        shortName: '【略称】',
        // ロゴ画像のURL。取得でき次第ここにURLまたはローカルパス（'/src/assets/logo.png'など）を入力します。
        // ※未設定の場合は会社名がテキストで表示されます。
        logoUrl: '/src/assets/logo.png',
        phone: '【000-000-0000】', // ダミー電話番号
        businessHours: '9:00 - 18:00', // ダミー対応時間
        license: '【必要に応じて許可証番号など】',
        areas: ['【ダミー市区町村1】', '【ダミー市区町村2】', '近郊エリア'],
        areasText: '地域密着の安心サポート',
        lineUrl: '#',
    },

    // 2. テーマカラー (Tailwindやインラインスタイルで使用)
    theme: {
        accent: '#0284c7', // プール・水回りを連想させるブルー（デフォルト）
        accentHover: '#0369a1',
    },

    // 3. メインビジュアル情報
    hero: {
        title: '美しく清潔な水辺空間を\nプロの技術で守ります。',
        subtitle: '地域No.1の信頼と実績',
        description: 'ご家庭のプールメンテナンスから、リフォーム・修理まで。\n安心・安全で快適な環境づくりをご提供します。',
        backgroundImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop', // プール/水辺のダミー画像
    },

    // 4. 強み・選ばれる理由
    philosophy: {
        title: '当社の3つの強み',
        subtitle: 'Why Choose Us',
        description: '数ある業者の中から私たちが選ばれるのには理由があります。',
        items: [
            {
                icon: 'CheckCircle',
                title: '確かな技術と実績',
                desc: '経験豊富な専門スタッフが、隅々まで丁寧な作業をお約束します。'
            },
            {
                icon: 'Clock',
                title: '迅速なトラブル対応',
                desc: '急なトラブルにもスピーディに対応。お客様の不安をいち早く解消します。'
            },
            {
                icon: 'ShieldCheck',
                title: '安心のアフターサポート',
                desc: '施工後のメンテナンスや定期点検など、長期的なサポート体制を整えています。'
            }
        ]
    },

    // 5. サービス内容
    services: {
        title: '幅広いサービスに対応',
        subtitle: 'Our Services',
        items: [
            {
                icon: 'Lamp',
                title: '定期清掃・メンテナンス',
                desc: '水質管理から清掃まで、快適な状態を維持するための定期サポート。',
                img: 'https://images.unsplash.com/photo-1582298538104-fe2f309aeb78?q=80&w=800&auto=format&fit=crop'
            },
            {
                icon: 'Home',
                title: '設備の修理・交換',
                desc: 'ポンプやフィルターなどの設備トラブルの早期発見・修理対応。',
                img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
            },
            {
                icon: 'Trees',
                title: 'リフォーム・改修工事',
                desc: '古くなった設備の近代化や、より使いやすい環境へのリニューアル。',
                img: 'https://images.unsplash.com/photo-1541888081600-410bfac6deab?q=80&w=800&auto=format&fit=crop'
            },
            {
                icon: 'ShieldCheck',
                title: '水質・安全検査',
                desc: 'ご家族が安心して利用できるよう、専門的な水質検査を実施します。',
                img: 'https://images.unsplash.com/photo-1534430480872-3498386e7a56?q=80&w=800&auto=format&fit=crop'
            }
        ]
    },

    // 6. 施工事例 / 実績
    portfolio: {
        title: '最新の施工・対応実績',
        subtitle: 'Works',
        items: [
            {
                title: '定期清掃と水質改善',
                category: 'A様邸',
                img: 'https://images.unsplash.com/photo-1582298538104-fe2f309aeb78?q=80&w=1200&auto=format&fit=crop'
            },
            {
                title: 'ポンプ設備の修理・交換',
                category: 'B様施設',
                img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop'
            },
            {
                title: '全体リニューアル工事',
                category: 'C様邸',
                img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop'
            }
        ]
    },

    // 7. お客様の声・レビュー
    reviews: {
        title: 'お客様の声',
        subtitle: 'Voices',
        items: [
            {
                name: 'D様',
                comment: '（ダミーのレビューです）とても素早く対応していただき助かりました！',
                rating: 5
            },
            {
                name: 'E様',
                comment: '（ダミーのレビューです）定期的にお願いしていますが、いつもピカピカにしてくれます。',
                rating: 5
            },
            {
                name: 'F様',
                comment: '（ダミーのレビューです）事前の説明がわかりやすく、安心してお任せできました。',
                rating: 4
            }
        ]
    },

    // 8. フォームの選択肢
    formOptions: [
        '清掃・メンテナンスについて',
        '修理・トラブル対応',
        'リフォーム・改修工事',
        '費用の見積もり',
        'その他のお問い合わせ'
    ]
};
