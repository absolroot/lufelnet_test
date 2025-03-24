const defenseCalcData = [
    {
        id: 1,
        charName: "-",
        charImage: "",
        type: "계시",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//revelation/여정.webp",
        skillName: "주권 + 여정",
        options: [],
        value: 23.0,
        duration: "2턴",
        note: ""
    },
    {
        id: 2,
        charName: "원더",
        charImage: "원더.webp",
        type: "전용무기",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//wonder-weapon/천상의 별.webp",
        skillName: "천상의 별",
        options: [],
        value: 22.0,
        duration: "-",
        note: ""
    },
    {
        id: 3,
        charName: "",
        charImage: "",
        type: "전용무기",
        target: "단일/광역",
        skillIcon: "{{ site.baseurl }}/assets/img//wonder-weapon/태고의 역장.webp",
        skillName: "태고의 역장",
        options: ["1중첩","2중첩","3중첩","4중첩"],
        values: {
            "1중첩": 9.0,
            "2중첩": 18.0,
            "3중첩": 27.0,
            "4중첩": 36.0
        },
        defaultOption: "4중첩",
        value: 36.0,
        duration: "2턴",
        note: "원소이상 2종 이하일 경우 매 턴 원더의 공격 필수"
    },
    {
        id: 4,
        charName: "",
        charImage: "",
        type: "스킬",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/디버프.png",
        skillName: "라쿤다",
        options: [],
        value: 38.8,
        duration: "3턴",
        note: ""
    },
    {
        id: 5,
        charName: "",
        charImage: "",
        type: "스킬",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/디버프광역.png",
        skillName: "음률의 침입",
        options: [],
        value: 32.0,
        duration: "3턴",
        note: ""
    },
    {
        id: 6,
        charName: "",
        charImage: "",
        type: "스킬",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/디버프광역.png",
        skillName: "마하라쿤다",
        options: [],
        value: 27.1,
        duration: "3턴",
        note: ""
    },
    {
        id: 7,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "단일/광역",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/비슈누.webp",
        skillName: "비슈누",
        options: [],
        value: 48.0,
        duration: "2턴",
        note: "풍습 부여 시"
    },
    {
        id: 8,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "단일/광역",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/노른.webp",
        skillName: "노른",
        options: [],
        value: 31.5,
        duration: "2턴",
        note: "풍습 부여 시"
    },
    {
        id: 9,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/야노식.webp",
        skillName: "야노식",
        options: [],
        value: 41.6,
        duration: "2턴",
        note: "[조준]"
    },
    {
        id: 10,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/체르노보그.webp",
        skillName: "체르노보그 - 고유스킬",
        options: [],
        value: 10.0,
        duration: "2턴",
        note: ""
    },
    {
        id: 11,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/년수.webp",
        skillName: "년수 - 고유스킬",
        options: [],
        value: 10.0,
        duration: "2턴",
        note: ""
    },
    {
        id: 12,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/시바.webp",
        skillName: "시바 - 고유스킬",
        options: [],
        value: 45.0,
        duration: "1턴",
        note: "2턴마다 방어력 감소 효과 발동 가능"
    },
    {
        id: 13,
        charName: "",
        charImage: "",
        type: "페르소나",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//tactic-persona/스라오샤.webp",
        skillName: "스라오샤 - 고유스킬",
        options: [],
        value: 25.0,
        duration: "1턴",
        note: "축복 속성 한정"
    },
    {
        id: "mio1",
        charName: "미오",
        charImage: "미오.webp",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/빙결광역.png",
        skillName: "파도의 메아리",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5"],
        values: {
            "LV10": 39.0,
            "LV10+심상5": 43.0,
            "LV13": 41.5,
            "LV13+심상5": 45.5
        },
        defaultOption: "LV13+심상5",
        value: 45.5,
        duration: "3턴",
        note: ""
    },
    {
        id: "mio2",
        charName: "",
        charImage: "",
        type: "스킬3",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/빙결광역.png",
        skillName: "흐름의 폭발",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5"],
        values: {
            "LV10": 36.6,
            "LV10+심상5": 40.4,
            "LV13": 38.8,
            "LV13+심상5": 43.6
        },
        defaultOption: "LV13+심상5",
        value: 43.6,
        duration: "2턴",
        note: ""
    },
    {
        id: "mio3",
        charName: "",
        charImage: "",
        type: "스킬3(강화)",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/빙결광역.png",
        skillName: "폭발의 용오름",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5"],
        values: {
            "LV10": 43.9,
            "LV10+심상5": 48.4,
            "LV13": 46.6,
            "LV13+심상5": 51.1
        },
        defaultOption: "LV13+심상5",
        value: 51.1,
        duration: "2턴",
        note: ""
    },
    {
        id: "mio4",
        charName: "",
        charImage: "",
        type: "전용무기",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//character-weapon/미오-5-01.png",
        skillName: "서리빛 스텔라",
        options: ["개조0","개조1&2","개조3&4","개조5&6"],
        values: {
            "개조0": 23.3,
            "개조1&2": 30.3,
            "개조3&4": 37.3,
            "개조5&6": 44.3
        },
        defaultOption: "개조5&6",
        value: 44.3,
        duration: "2턴",
        note: ""
    },
    {
        id: 14,
        charName: "후타바",
        charImage: "후타바.webp",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/버프.png",
        skillName: "소리없는 침습 (약점)",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5","LV13(의식5)","LV13(의식5)+심상5"],
        values: {
            "LV10": 60.8,
            "LV10+심상5": 65.7,
            "LV13": 75.4,
            "LV13+심상5": 80.3,
            "LV13(의식5)": 87.5,
            "LV13(의식5)+심상5": 93.1
        },
        defaultOption: "LV13(의식5)+심상5",
        value: 93.1,
        duration: "2턴",
        note: ""
    },
    {
        id: "14-2",
        charName: "",
        charImage: "",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/버프.png",
        skillName: "소리없는 침습",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5","LV13(의식5)","LV13(의식5)+심상5"],
        values: {
            "LV10": 30.4,
            "LV10+심상5": 32.8,
            "LV13": 37.7,
            "LV13+심상5": 40.1,
            "LV13(의식5)": 43.7,
            "LV13(의식5)+심상5": 46.6
        },
        defaultOption: "LV13(의식5)+심상5",
        value: 46.6,
        duration: "2턴",
        note: ""
    },
    {
        id: 15,
        charName: "",
        charImage: "",
        type: "계시",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//revelation/결심.webp",
        skillName: "직책 + 결심",
        options: [],
        value: 10.0,
        duration: "2턴",
        note: ""
    },
    {
        id: "tomoko1",
        charName: "토모코·여름",
        charImage: "토모코·여름.webp",
        type: "의식1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//character-detail/ritual1.png",
        skillName: "어김없는 빛",
        options: ["1중첩","2중첩","3중첩"],
        values: {
            "1중첩": 15.0,
            "2중첩": 30.0,
            "3중첩": 45.0
        },
        defaultOption: "3중첩",
        value: 45.0,
        duration: "3턴",
        note: "화려한 불꽃 발동 시 1중첩"
    },
    {
        id: 16,
        charName: "루우나",
        charImage: "루우나.webp",
        type: "전용무기",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//character-weapon/루우나-5-01.png",
        skillName: "바이트 클로우 (스킬1 스택)",
        options: ["개조0","개조1&2","개조3&4","개조5&6"],
        values: {
            "개조0": 16.7,
            "개조1&2": 21.7,
            "개조3&4": 26.7,
            "개조5&6": 31.7
        },
        defaultOption: "개조5&6",
        value: 31.7,
        duration: "2턴",
        note: ""
    },
    {
        id: 17,
        charName: "",
        charImage: "",
        type: "전용무기",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//character-weapon/루우나-5-01.png",
        skillName: "바이트 클로우 (스킬2 스택)",
        options: ["개조0","개조1&2","개조3&4","개조5&6"],
        values: {
            "개조0": 33.3,
            "개조1&2": 43.3,
            "개조3&4": 53.3,
            "개조5&6": 63.3
        },
        defaultOption: "개조5&6",
        value: 63.3,
        duration: "2턴",
        note: ""
    },
    {
        id: 18,
        charName: "",
        charImage: "",
        type: "의식0",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//character-detail/ritual0.png",
        skillName: "모든 포옹과 따뜻함 (스킬3)",
        options: [],
        value: 18.0,
        duration: "2턴",
        note: "의식6 → 3턴으로 증가"
    },
    {
        id: "19-1",
        charName: "",
        charImage: "",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/화염광역.png",
        skillName: "뜨거운 악수 (화염)",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5"],
        values: {
            "LV10": 52.8,
            "LV10+심상5": 55.6,
            "LV13": 56.2,
            "LV13+심상5": 58.7
        },
        defaultOption: "LV13+심상5",
        value: 58.7,
        duration: "2턴",
        note: "의식6 → 3턴으로 증가"
    },
    {
        id: "19-2",
        charName: "",
        charImage: "",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/화염광역.png",
        skillName: "뜨거운 악수",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5"],
        values: {
            "LV10": 26.4,
            "LV10+심상5": 29.2,
            "LV13": 27.9,
            "LV13+심상5": 30.7
        },
        defaultOption: "LV13+심상5",
        value: 30.7,
        duration: "2턴",
        note: "의식6 → 3턴으로 증가"
    },

    {
        id: 20,
        charName: "",
        charImage: "",
        type: "스킬2",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/화염.png",
        skillName: "악당에 대한 경고",
        options: ["LV10","LV10+심상5","LV13","LV13+심상5"],
        values: {
            "LV10": 68.3,
            "LV10+심상5": 73.9,
            "LV13": 72.5,
            "LV13+심상5": 78.0
        },
        defaultOption: "LV13+심상5",
        value: 78.0,
        duration: "2턴",
        note: "의식6 → 3턴으로 증가"
    },
    {
        id: 21,
        charName: "치즈코",
        charImage: "치즈코.webp",
        type: "전용무기",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//character-weapon/치즈코-5-01.png",
        skillName: "오버클럭 펄스",
        options: ["개조0","개조1&2","개조3&4","개조5&6"],
        values: {
            "개조0": 33.0,
            "개조1&2": 43.0,
            "개조3&4": 53.0,
            "개조5&6": 63.0
        },
        defaultOption: "개조5&6",
        value: 63.0,
        duration: "2턴",
        note: ""
    },
    {
        id: 22,
        charName: "",
        charImage: "",
        type: "스킬1",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/핵열.png",
        skillName: "시그널 폭탄",
        options: [],
        value: 38.8,
        duration: "2턴",
        note: ""
    },
    {
        id: "rico1",
        charName: "리코",
        charImage: "리코.webp",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/버프광역.png",
        skillName: "노을 그림자술",
        options: ["LV12","LV12+심상5"],
        values: {
            "LV12": 42.6,
            "LV12+심상5": 45.5
        },
        defaultOption: "LV12+심상5",
        value: 45.5,
        duration: "2턴",
        note: ""
    },
    {
        id: 23,
        charName: "야오링",
        charImage: "야오링.webp",
        type: "스킬1",
        target: "광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/주원광역.png",
        skillName: "나룻배 사공",
        options: ["LV10","LV13","LV13+심상5"],
        values: {
            "LV10": 49.7,
            "LV13": 53.5,
            "LV13+심상5": 58.6
        },
        defaultOption: "LV13+심상5",
        value: 58.6,
        duration: "2턴",
        note: ""
    },
    {
        id: 24,
        charName: "슌",
        charImage: "슌.webp",
        type: "전용무기",
        target: "단일/광역",
        skillIcon: "{{ site.baseurl }}/assets/img//character-weapon/슌-5-01.png",
        skillName: "선구자의 얼음도끼",
        options: ["개조0","개조1&2","개조3&4","개조5&6"],
        values: {
            "개조0": 30.0,
            "개조1&2": 39.0,
            "개조3&4": 48.0,
            "개조5&6": 57.0
        },
        defaultOption: "개조5&6",
        value: 57.0,
        duration: "1턴",
        note: "공격 받을 시 발동"
    },
    {
        id: 25,
        charName: "",
        charImage: "",
        type: "스킬2",
        target: "단일",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/물리.png",
        skillName: "선봉 돌격",
        options: ["LV12","LV12(황야의 구세주)"],
        values: {
            "LV12": 31.2,
            "LV12(황야의 구세주)": 62.4
        },
        defaultOption: "LV12(황야의 구세주)",
        value: 62.4,
        duration: "2턴",
        note: ""
    },
    {
        id: 26,
        charName: "",
        charImage: "",
        type: "총기",
        target: "단일/광역",
        skillIcon: "{{ site.baseurl }}/assets/img//skill-element/총격.png",
        skillName: "총격",
        options: [],
        value: 35.0,
        duration: "3턴",
        note: "10.0% 고정확률, 총기 42발 (리필 24)"
    }
]; 