// 질문 및 결과 데이터
export const testData = {
  title: "나의 직무 적성 찾기",
  description: "11개의 질문으로 알아보는 나에게 맞는 직무",

  questions: [
    {
      id: 1,
      question: "엔진에 대한 내 감정은?",
      engineModel: "H35DF",
      imageKey: "h35df",
      imageCaption:
        "독자적인 연소 최적화 설계로 세계 시장 점유율이 증명하는, HD현대중공업의 대표 고효율·친환경 중속 이중연료 엔진",
      options: [
        {
          text: "내 몸은 심장 대신 크랭크로 돌아간다",
          scores: {
            marine_sales: 1.11,
            power_sales: 1.11,
            large_design: 1.11,
            control_design: 1.11,
            eco_design: 1.11,
            power_design: 1.11,
            development: 1.11,
            production: 1.11,
            quality: 1.12,
          },
        },
        {
          text: "엔진 돌아가는 소리가 최애 ASMR",
          scores: {
            marine_sales: 1.11,
            power_sales: 1.11,
            large_design: 1.11,
            control_design: 1.11,
            eco_design: 1.11,
            power_design: 1.11,
            development: 1.11,
            production: 1.11,
            quality: 1.12,
          },
        },
        {
          text: "별 생각 안 든다",
          scores: { restart: 100.0 },
        },
      ],
    },
    {
      id: 2,
      question: "친구가 약속 시간에 30분 늦었을 때 나의 반응은?",
      engineModel: "대형 프로펠러 (CPP/FPP)",
      imageKey: "propller_shaft",
      imageCaption:
        "세계 시장 점유율 약 20%를 보유하며 연간 200여 대를 생산하며, FPP와 CPP 라인업을 통해 다양한 선종의 추진 효율 최적화를 실현하는 선박 기자재",
      options: [
        {
          text: '"밥 네가 사라 ㅋ" 유도리 있게 딜을 건다',
          scores: {
            marine_sales: 3.5,
            power_sales: 3.0,
            large_design: 1.5,
            power_design: 0.7,
            development: 0.5,
            control_design: 0.3,
            eco_design: 0.2,
            production: 0.2,
            quality: 0.1,
          },
        },
        {
          text: '"지하철 놓쳤어?" 늦은 원인을 캐묻는다',
          scores: {
            development: 3.0,
            large_design: 2.5,
            power_design: 2.0,
            control_design: 1.5,
            eco_design: 0.5,
            power_sales: 0.2,
            marine_sales: 0.1,
            production: 0.1,
            quality: 0.1,
          },
        },
        {
          text: '"다음부터는 30분 일찍 출발해." 단호하게 팩트를 짚는다',
          scores: {
            quality: 3.5,
            production: 3.0,
            development: 1.5,
            power_sales: 0.8,
            marine_sales: 0.5,
            large_design: 0.3,
            power_design: 0.2,
            control_design: 0.1,
            eco_design: 0.1,
          },
        },
      ],
    },
    {
      id: 3,
      question: "승강기에 중국 선주사 사장과 단둘이 탔다!",
      engineModel: "NoNOx SCR",
      imageKey: "nonox",
      imageCaption:
        "독자적인 Urea 정밀 분사 및 촉매 제어 기술로 NOx 배출 규제를 충족하며, 엔진룸 내 배치 유연성을 극대화한 컴팩트 SCR",
      options: [
        {
          text: '"您吃饭了吗？?" 어설픈 중국어로 스몰토크 시도',
          scores: {
            marine_sales: 4.0,
            power_sales: 3.0,
            large_design: 1.2,
            power_design: 0.7,
            control_design: 0.4,
            eco_design: 0.3,
            development: 0.2,
            production: 0.1,
            quality: 0.1,
          },
        },
        {
          text: '(핸드폰 보며) "오늘 수정사항 3건... 14시 미팅..." 머릿속 정리',
          scores: {
            control_design: 2.8,
            large_design: 2.3,
            power_design: 1.8,
            eco_design: 1.5,
            development: 1.0,
            power_sales: 0.3,
            production: 0.2,
            marine_sales: 0.1,
            quality: 0.0,
          },
        },
        {
          text: "(벽에 붙은 안전검사 스티커 유효기간 확인 중)",
          scores: {
            quality: 4.0,
            production: 2.5,
            eco_design: 1.5,
            development: 1.0,
            power_sales: 0.4,
            marine_sales: 0.3,
            large_design: 0.1,
            control_design: 0.1,
            power_design: 0.1,
          },
        },
      ],
    },
    {
      id: 4,
      question: "신규 프로젝트 시작! 첫 단계는?",
      engineModel: "H32/40V - 육상용",
      imageKey: "h32_40v",
      imageCaption:
        "장시간 고부하 운전과 급격한 부하 변동 조건에서도 주파수 제어의 안정성을 유지하는 육상 발전용 엔진",
      options: [
        {
          text: "시장 조사, 고객 요구사항 수집부터",
          scores: {
            marine_sales: 2.5,
            power_sales: 2.5,
            large_design: 1.5,
            power_design: 1.5,
            control_design: 0.7,
            eco_design: 0.5,
            development: 0.4,
            production: 0.3,
            quality: 0.1,
          },
        },
        {
          text: "기존 엔진 성능 데이터 벤치마킹, 목표 출력 설정",
          scores: {
            power_design: 3.5,
            development: 2.5,
            large_design: 2.5,
            control_design: 1.0,
            eco_design: 0.3,
            power_sales: 0.1,
            marine_sales: 0.1,
            production: 0.0,
            quality: 0.0,
          },
        },
        {
          text: "적용 규제(Tier III, IMO) 확인, 후처리 장치 사양 검토",
          scores: {
            eco_design: 5.0,
            control_design: 4.0,
            development: 0.5,
            large_design: 0.3,
            power_design: 0.1,
            production: 0.1,
            power_sales: 0.0,
            marine_sales: 0.0,
            quality: 0.0,
          },
        },
      ],
    },
    {
      id: 5,
      question: "납기 3일 전, 서버 고장으로 도면이 날아갔다!",
      engineModel: "H32CDF-LA",
      imageKey: "h32cdf",
      imageCaption:
        "독자적인 e-HBU 고압 직분사 기술로 암모니아의 특성을 완벽히 제어하는 차세대 친환경 엔진",
      options: [
        {
          text: '"저희 팀 사정이..." 기한 연장 시도',
          scores: {
            marine_sales: 3.0,
            power_sales: 3.0,
            large_design: 2.0,
            power_design: 0.8,
            development: 0.5,
            control_design: 0.3,
            eco_design: 0.2,
            production: 0.1,
            quality: 0.1,
          },
        },
        {
          text: "백업 파일 찾아서 밤샘 각오로 재작업 돌입",
          scores: {
            development: 3.0,
            power_design: 2.5,
            large_design: 2.0,
            control_design: 1.5,
            eco_design: 0.5,
            power_sales: 0.2,
            production: 0.3,
            marine_sales: 0.0,
            quality: 0.0,
          },
        },
        {
          text: '"그럴 줄 알고 E-fam, PLM, teams 3중 백업했죠."',
          scores: {
            quality: 3.5,
            production: 2.5,
            large_design: 1.5,
            control_design: 1.2,
            development: 0.8,
            power_sales: 0.3,
            eco_design: 0.1,
            marine_sales: 0.1,
            power_design: 0.0,
          },
        },
      ],
    },
    {
      id: 6,
      question: '그리스 선주가 "이 사양 바꿔!"라며 난리칠 때?',
      engineModel: "H25/33(V)",
      imageKey: "h25_33",
      imageCaption:
        "압도적인 내구성과 직관적인 모듈화 설계를 통해, 가장 두터운 신뢰를 받는 선박용 핵심 디젤 엔진 시리즈",
      options: [
        {
          text: '"Yes sir, let me check~" 웃으며 기분 맞춰주고 협의 유도',
          scores: {
            marine_sales: 3.4,
            power_sales: 3.0,
            large_design: 2.0,
            power_design: 0.7,
            development: 0.3,
            control_design: 0.2,
            eco_design: 0.1,
            production: 0.1,
            quality: 0.1,
          },
        },
        {
          text: '"기술적으로 이 사양 변경 시 성능이..." 데이터로 설득',
          scores: {
            large_design: 2.5,
            power_design: 2.2,
            control_design: 2.0,
            eco_design: 1.8,
            development: 1.0,
            power_sales: 0.3,
            marine_sales: 0.1,
            production: 0.1,
            quality: 0.0,
          },
        },
        {
          text: '"Contract appendix 참조하십시오." 계약서 들이밀기',
          scores: {
            quality: 3.0,
            production: 3.0,
            marine_sales: 1.0,
            power_sales: 1.2,
            development: 0.8,
            large_design: 0.5,
            power_design: 0.1,
            control_design: 0.5,
            eco_design: 0.0,
          },
        },
      ],
    },
    {
      id: 7,
      question: '선배가 "이렇게 하면 시간 절약돼" 편법을 알려줄 때?',
      engineModel: "Hi-Ballast",
      imageKey: "Hi-Ballast",
      imageCaption:
        "전기분해 방식 기반의 독자 개발 평형수처리장치이며, 컴팩트한 모듈 설계로 신조 및 기존 선박 개조 설치 모두에 대응하는 친환경 박용기계 제품",
      options: [
        {
          text: '"오 개꿀!" 당장 써먹는다',
          scores: {
            marine_sales: 1.4,
            power_sales: 2.0,
            development: 1.8,
            production: 1.5,
            large_design: 1.5,
            power_design: 0.3,
            control_design: 0.3,
            eco_design: 1.1,
            quality: 0.0,
          },
        },
        {
          text: '"근데 나중에 문제가 없나?" 리스크 계산',
          scores: {
            large_design: 2.5,
            control_design: 2.3,
            eco_design: 2.0,
            power_design: 1.3,
            development: 1.5,
            power_sales: 0.2,
            production: 0.1,
            marine_sales: 0.1,
            quality: 0.0,
          },
        },
        {
          text: '"매뉴얼은 매뉴얼입니다." FM 고집',
          scores: {
            quality: 3.5,
            production: 3.0,
            development: 1.5,
            eco_design: 0.8,
            power_sales: 0.4,
            large_design: 0.1,
            control_design: 0.6,
            power_design: 0.1,
            marine_sales: 0.0,
          },
        },
      ],
    },
    {
      id: 8,
      question: "팀플 조장이 되었다! 내가 가장 먼저 할 일은?",
      engineModel: "H32MDF",
      imageKey: "H32MDF",
      imageCaption:
        "세계 최초 중속 메탄올 이중연료 엔진으로, 고압 직분사 방식을 통해 미연소 배출을 최소화하고 출시 직후 중속 메탄올 엔진 시장 점유율 72%를 달성한 친환경 추진·발전용 엔진",
      options: [
        {
          text: '"우리 끝나고 치맥 콜?" 팀원들 텐션부터 끌어올린다',
          scores: {
            marine_sales: 2.0,
            power_sales: 2.5,
            large_design: 2.0,
            power_design: 0.8,
            development: 0.5,
            control_design: 0.3,
            eco_design: 1.7,
            production: 0.1,
            quality: 0.1,
          },
        },
        {
          text: "노션을 켜서 파트별 역할과 일정을 쫙 정리한다",
          scores: {
            power_sales: 2.0,
            large_design: 1.7,
            control_design: 2.0,
            production: 1.5,
            eco_design: 1.5,
            development: 1.0,
            power_design: 0.2,
            marine_sales: 0.1,
            quality: 0.0,
          },
        },
        {
          text: "목표부터 명확히 정하자",
          scores: {
            power_design: 3.0,
            eco_design: 2.5,
            large_design: 1.5,
            development: 1.5,
            control_design: 1.0,
            power_sales: 0.3,
            marine_sales: 0.1,
            production: 0.1,
            quality: 0.0,
          },
        },
      ],
    },
    {
      id: 9,
      question: "진짜 못 참겠는 팀원은?",
      engineModel: "X-DF Engines",
      imageKey: "x_df",
      imageCaption:
        "저압 예혼합 기술로 후처리 장치 없이도 가스 모드에서 Tier III를 달성하는 경제적이고 안정적인 대형 이중연료 엔진",
      options: [
        {
          text: "메신저 읽씹하고 미팅 때도 말 없이 분위기만 다운시키는 타입",
          scores: {
            marine_sales: 2.5,
            power_sales: 2.0,
            large_design: 1.8,
            power_design: 0.8,
            control_design: 0.5,
            eco_design: 2.2,
            development: 0.1,
            production: 0.1,
            quality: 0.0,
          },
        },
        {
          text: '생각 없이 모든 의견에 "다 좋은데요~" 하면서 본인 의견은 제로인 타입',
          scores: {
            development: 2.8,
            power_design: 2.3,
            large_design: 2.0,
            control_design: 1.5,
            eco_design: 1.0,
            power_sales: 0.2,
            production: 0.1,
            marine_sales: 0.1,
            quality: 0.0,
          },
        },
        {
          text: '"깜빡했어요" 하면서 마감 시한 어기는 게 습관인 타입',
          scores: {
            quality: 3.5,
            production: 3.0,
            power_sales: 1.5,
            marine_sales: 0.5,
            development: 1.3,
            large_design: 0.1,
            control_design: 0.1,
            eco_design: 0.0,
            power_design: 0.0,
          },
        },
      ],
    },
    {
      id: 10,
      question:
        "엔진 성능 5% 향상 vs 배출가스 10% 저감, 둘 중 하나만 선택한다면?",
      engineModel: "H32CDF-LA",
      imageKey: "h32cdf",
      imageCaption:
        "독자적인 e-HBU 고압 직분사 기술로 암모니아의 특성을 완벽히 제어하는 차세대 친환경 엔진",
      options: [
        {
          text: "성능 5% 올리면 더 좋아할 거 같은데?",
          scores: {
            marine_sales: 2.5,
            power_sales: 2.5,
            large_design: 2.0,
            power_design: 0.8,
            control_design: 1.1,
            eco_design: 0.4,
            development: 0.4,
            production: 0.2,
            quality: 0.1,
          },
        },
        {
          text: "배출가스 저감이 미래 경쟁력이지, 친환경이 대세야",
          scores: {
            eco_design: 4.5,
            control_design: 2.0,
            development: 1.5,
            power_design: 0.8,
            large_design: 0.5,
            marine_sales: 0.3,
            power_sales: 0.2,
            production: 0.1,
            quality: 0.1,
          },
        },
        {
          text: "둘 다 검증 데이터 보고 결정해야지, 함부로 못 골라",
          scores: {
            quality: 2.5,
            production: 2.5,
            development: 2.5,
            large_design: 1.2,
            control_design: 0.8,
            eco_design: 0.3,
            power_design: 0.1,
            marine_sales: 0.1,
            power_sales: 0.0,
          },
        },
      ],
    },
    {
      id: 11,
      question: "친구가 엔진에 대해 물어봤다",
      engineModel: "Hi-GAS",
      imageKey: "Hi-GAS",
      imageCaption:
        "M/E와 G/E에 LNG 연료를 단일 시스템으로 동시 공급할 수 있는 통합 설계로, 선종과 엔진 조합에 관계없이 유연하게 적용 가능한 LNG 연료 가스 공급 시스템",
      options: [
        {
          text: '"이 엔진 얼만지 알아? 왜 얘가 남다른지 알아?" 내껀 아니지만 자랑하고싶다',
          scores: {
            marine_sales: 2.0,
            power_sales: 2.0,
            large_design: 1.7,
            power_design: 1.1,
            development: 1.3,
            control_design: 0.7,
            eco_design: 1.1,
            production: 0.1,
            quality: 0.0,
          },
        },
        {
          text: '"이 RPM에서 연료 분사 타이밍을..." 머릿속이 스펙으로 꽉 찼다',
          scores: {
            development: 3.0,
            power_design: 2.5,
            control_design: 2.3,
            large_design: 1.5,
            eco_design: 0.5,
            power_sales: 0.1,
            marine_sales: 0.1,
            production: 0.0,
            quality: 0.0,
          },
        },
        {
          text: '"실린더 간극 0.05mm까지 체크한거라니까?" 완벽함에 쾌감을 느낀다',
          scores: {
            quality: 4.0,
            production: 3.5,
            development: 1.5,
            large_design: 0.5,
            power_design: 0.2,
            eco_design: 0.1,
            control_design: 0.1,
            power_sales: 0.1,
            marine_sales: 0.0,
          },
        },
      ],
    },
  ],

  results: {
    marine_sales: {
      type: "엔진시스템기술영업",
      emoji: "⚓",
      description:
        "선박용 엔진의 설계부터 계약까지, 기술과 영업을 아우르는 해양 전문가",
      traits: [
        "기술 이해력과 영업 감각을 동시에 보유",
        "뛰어난 커뮤니케이션과 협상 능력",
        "글로벌 고객 대응 및 관계 형성 능력",
        "프로젝트 전반을 조율하는 관리 능력",
      ],
      careers: [
        "선박용 엔진 사양 선정 및 맞춤 설계",
        "조선소·선주사 대상 기술 협의",
        "계약 프로젝트 관리 (일정·자원·비용)",
        "고객 맞춤형 솔루션 제공",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    power_sales: {
      type: "엔진발전",
      emoji: "⚡",
      description:
        "육상 발전 시스템의 설계·시운전·공사까지 책임지는 에너지 솔루션 전문가",
      traits: [
        "발전 시스템에 대한 깊은 기술 전문성",
        "현장 문제를 신속히 해결하는 대응력",
        "시스템 전체를 아우르는 통합적 사고",
        "고객 기술 협상 및 설득 능력",
      ],
      careers: [
        "육상 엔진 발전 기본/상세 설계",
        "현장 시운전 및 성능 검증",
        "발전소 공사 관리 및 품질 조율",
        "에너지 솔루션 영업 및 고객 개발",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    large_design: {
      type: "대형엔진설계",
      emoji: "🔧",
      description:
        "고객 맞춤 양산설계와 트러블슈팅으로 대형 엔진의 완성도를 책임지는 설계 전문가",
      traits: [
        "생산 효율과 품질을 동시에 고려하는 최적화 능력",
        "복잡한 기술 문제를 분석하고 해결하는 능력",
        "고객 및 라이센서와 협업하는 소통 능력",
        "원가경쟁력 향상을 위한 개선 마인드",
      ],
      careers: [
        "라이센서 설계 기반 양산 최적화",
        "고객 맞춤 설계 및 수입부품 국산화",
        "제작·시운전·커미셔닝 트러블슈팅",
        "라이센서사와 신기술 공동 개발",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    control_design: {
      type: "제어시스템설계",
      emoji: "🎛️",
      description:
        "엔진의 두뇌를 설계하고 검증하여 최적의 성능을 구현하는 제어 전문가",
      traits: [
        "전기·전자 시스템에 대한 전문 지식",
        "제어 로직을 체계적으로 검증하는 정밀함",
        "복잡한 시스템을 통합하는 능력",
        "선급 인증 기준을 완벽히 충족시키는 꼼꼼함",
      ],
      careers: [
        "엔진 제어 시스템 개발 및 최적화",
        "제어 로직 검증 및 선급 시험 인증",
        "전장품 맞춤 설계 및 국산화 추진",
        "엔진 전장품 트러블슈팅 및 기술지원",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    eco_design: {
      type: "친환경시스템설계",
      emoji: "🌱",
      description:
        "SCR·메탄슬립·EGR 등 친환경 기술로 미래 해양을 설계하는 환경 전문가",
      traits: [
        "환경 규제와 친환경 기술 트렌드에 대한 전문성",
        "후처리 시스템을 설계하고 최적화하는 능력",
        "신기술을 빠르게 학습하고 적용하는 능력",
        "지속가능성에 대한 철학과 사명감",
      ],
      careers: [
        "SCR·메탄슬립·EGR 후처리 장치 설계",
        "친환경 규제 대응 및 기술 개발",
        "방산용 가스터빈 패키지 설계 및 시운전",
        "시스템 최적화 및 현장 기술 지원",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    power_design: {
      type: "힘센엔진설계",
      emoji: "💪",
      description:
        "고객 맞춤 양산설계와 육상·원자력 발전 설계를 수행하는 힘센엔진 전문가",
      traits: [
        "고성능 엔진을 설계하는 기술적 전문성",
        "제작 중 발생하는 문제를 빠르게 분석하는 능력",
        "고객 및 라이센시사와 협업하는 소통 능력",
        "육상·원자력 등 특수 환경 대응 능력",
      ],
      careers: [
        "힘센엔진 양산설계 및 트러블슈팅",
        "육상발전·원자력 비상발전기 기본설계",
        "고객 기술문의 응대 및 솔루션 제공",
        "라이센시사 기술 협업 업무",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    development: {
      type: "개발부",
      emoji: "🔬",
      description:
        "신규 엔진과 핵심부품을 개발하고 형식승인까지 완수하는 R&D 전문가",
      traits: [
        "새로운 기술을 창조하는 혁신적 사고",
        "엔진 구조와 성능을 깊이 이해하는 전문성",
        "시제품 제작과 시험을 주도하는 실행력",
        "실패를 두려워하지 않는 도전 정신",
      ],
      careers: [
        "신규 힘센엔진 모델 개발 설계",
        "형식승인시험(TAT) 제작 및 지원",
        "연료분사 시스템 및 주요 기자재 개발",
        "시제품 제작 및 양산 공정 지원",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    production: {
      type: "생산관리",
      emoji: "⚙️",
      description:
        "주조·가공·조립 전 공정을 최적화하여 엔진 생산을 책임지는 생산기술 전문가",
      traits: [
        "생산 공정을 최적화하는 효율성 추구",
        "3D CAD/CAM 및 시뮬레이션 활용 능력",
        "설비 투자와 개선을 주도하는 실행력",
        "품질과 생산성을 동시에 관리하는 균형 감각",
      ],
      careers: [
        "엔진 블록·프로펠라 주조 해석 및 방안 수립",
        "3D CAD/CAM을 활용한 가공 생산 기술",
        "조립·시운전 설비 개발 및 유지",
        "엔진 운전 성능 최적화 검토",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    quality: {
      type: "품질",
      emoji: "✓",
      description:
        "설계·규격 준수를 검증하고 품질 기준을 관리하는 품질보증 전문가",
      traits: [
        "1mm의 오차도 허용하지 않는 완벽주의",
        "품질 기준과 원칙을 철저히 준수하는 성향",
        "문제를 조기에 발견하는 예리한 관찰력",
        "검사 결과를 체계적으로 문서화하는 꼼꼼함",
      ],
      careers: [
        "정기 품질 검사 및 조기 문제 발견",
        "품질 기준·규정에 따른 작업 모니터링",
        "검사 결과 분석 및 수정 조치 실행",
        "품질 관리 문서화 및 투명성 확보",
      ],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },

    restart: {
      type: "그럴 리 없습니다",
      emoji: "🔄",
      description: "엔진에 대한 열정이 필요합니다",
      traits: ["엔진에 대한 관심을 가져보세요", "다시 한 번 도전해주세요"],
      careers: [],
      color: "linear-gradient(135deg, #003087 0%, #002554 100%)",
    },
  },
};
