export const rules = [
    {
        id: "logtime",
        content: "24h de log",
        colors: {
            low: 0,
            middle: 12,
            high: 24
        }
    },
    {
        id: "give_correction",
        content: "Corriger un peer une fois par semaine",
        colors: {
            low: 0,
            high: 1
        }
    },
    {
        id: "receive_correction",
        content: "Se faire corriger un projet une fois toutes les deux semaines ⚠️ Faire toutes les corrections, il ne faut pas give up !",
        colors: {
            low: 0,
            high: 1
        }
    },
    {
        id: "events",
        content: "Participer à un event par semaine ou organiser un event par mois 😉 À la pedago on préfère que vous organisez des events !",
        colors: {
            low: 0,
            middle: 2,
            high: 4,
        }
    }
];