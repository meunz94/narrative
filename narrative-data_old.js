/* =====================================================================
   narrative.html 에 나오는 글자는 전부 여기 있어요.
   이 파일을 고치고 저장한 뒤, 브라우저에서 narrative.html 을 새로고침하면 바로 반영됩니다.

   고칠 때 지킬 것
   · 글자는 '작은따옴표' 안에만 쓰세요.  예) name:'Dr. Vance',
   · 글자 안에 작은따옴표(')를 쓰려면 앞에 \ 를 붙이세요.  예) 'Vance\'s file'
   · 줄 끝의 쉼표(,)와 괄호 { } [ ] 짝은 그대로 두세요.
   · 슬래시-별표로 감싼 부분과 // 뒤는 설명이라 화면에 안 나와요.
   · 숫자·위치 값(at, side, y, r, box, w, lv, ref, links, chars ...)은 배치·연결용이에요. 글만 고칠 땐 안 건드려도 됩니다.
   · 잘못 고쳐서 문법이 깨지면 화면에 안내가 떠요. VS Code 에서 이 파일을 열면 틀린 곳에 빨간 밑줄이 생겨요.

   차례
   1. ui        버튼 · 섹션 제목 · 범례 같은 고정 문구
   2. chars     프로필 (A = Dr. Vance / B = Blanc)
   3. intro     스크롤 화면 (인물 주변 라벨 · 하단 이름 블록 · 마지막 화면 박스)
   4. timeline  타임라인 (챕터 · 미니 노드)
   ===================================================================== */
window.DATA = {

  /* ===================================================================
     1. UI — 화면 곳곳의 고정 문구.  {n} {code} 같은 중괄호는 자동으로 채워지는 자리예요.
     =================================================================== */
  ui: {
    theme: { black: 'DR. VANCE', white: 'BLANC' },                       // 상단 가운데 색 전환 스위치

    home: {                                                        // 스크롤 화면
      heroLine1: 'The only',                                        // 첫 화면 타이틀 1줄
      heroLine2: 'variable',                                        // 첫 화면 타이틀 2줄
      heroSub: 'in perfectly deterministic world.',                 // 첫 화면 부제
      hint: 'scroll to decode',                                     // 첫 화면 하단 스크롤 안내
      bottomLeft: 'The only variable in',                           // 하단 이름 블록 맨 아랫줄 왼쪽
      bottomRight: 'perfectly deterministic world',                 // 하단 이름 블록 맨 아랫줄 오른쪽
      frame: '{who} · W {w} · H {h} · ×{s}',                        // 인물 둘레 선택 프레임 위 작은 글씨
      whoA: 'OBSERVER', whoB: 'SUBJECT', whoPair: 'OBSERVER × SUBJECT',
    },

    final: {                                                       // 스크롤 맨 아래 화면
      tagLeft: '#ARCH',
      tagsRight: ['#THE_ONLY_OUTLIER', '#LONGITUDINAL_STUDY', '#EXPERIMENTAL_LOVE'],
      button: 'Timeline',                                           // 버튼 1 → 타임라인
      buttonWordcloud: 'Wordcloud',                                 // 버튼 2 → wordcloud.html
      note: 'RESEARCH IS ALL YOU NEED',
      giant: 'LIMBIC SYSTEM',                                       // 하단 큰 글씨
    },

    profile: {
      back: '← Return',
      live: '● LIVE',                                               // 사원증 사진 위
      accessLevel: 'access level',                                  // 카드 오른쪽 위 셋째 줄 앞부분
      sec1: 'Identification', sec1Tag: 'ARCH-S-00212',
      sec2: 'History', sec2Tag: '{n} entries',
      sec3: 'Ability', sec3Tag: 'S-class',
      sec4: 'Relations', sec4Tag: '{n} nodes',
      relCenter: 'Relationship',                                    // Relations 그래프 가운데 노드
      tipHead: 'SEG_{i} · {code}',                                  // 반원 그래프 툴팁 맨 위 왼쪽
      tipWeight: '{w}u',                                            // 툴팁 맨 위 오른쪽 (비중)
    },

    timeline: {
      back: '← Return',
      legend: { chapter: 'Chapter', event: 'Event', dialogue: 'Dialogue', note: 'Note', A: 'Vance', B: 'Blanc', AB: 'Both' },   // 왼쪽 아래 범례
      kind: { major: 'Chapter', event: 'Event', dialogue: 'Dialogue', note: 'Note' },   // 팝업 맨 위 종류
      ring: { event: 'EVT', dialogue: 'DLG', note: 'NOTE' },          // 노드 호버 시 원형 표시 옆 글씨
      chapter: 'CH_{n}',                                            // 챕터 번호 형식
      pin: '▢ click to pin', pinned: '▣ pinned · esc',
      linked: 'linked ·',
      who: { A: 'Vance', B: 'Blanc' },                                // 팝업 인물 태그
      speaker: { A: 'VANCE', B: 'BLANC' },                            // 대화 노드 말한 사람
    },
  },

  /* ===================================================================
     2. CHARS — 프로필.  A = Dr. Vance (캐논) / B = Blanc (OC)
     =================================================================== */
  chars: {
    A: {
      bg: '../리소스/vance-bg.jpeg',   /* 프로필 배경 일러스트 */
      /* 배경 클릭 시 흐르는 시놉시스 타이포 */
      syn: {
        t1: 'Observer', t2: 'Effect', em: 'the', sub: 'Harmony Div. · ARCH', words: ['rational', 'duty', 'anticipation'],
        lead: 'A variable I did not account for.', meta: 'OBSERVER · field notes',
        para: '관측자는 관측 대상에게 영향을 주지 않아야 한다. 그 전제가 무너지는 순간부터 이 기록은 연구 노트가 아니라 고백이 된다.',
        chapter: 'Chapter 1', chapterTag: '징계 면담', chapterText: '훈련실 하나를 통째로 얼린 이유를 물었다. 돌아온 답은 실험이었다고. 그 말에 화가 났고, 그보다 먼저 궁금해졌다.',
        day: '23', month: 'December', quote: '"황당함과 분노 사이, 일말의 기대감. 그는 그것을 의무감이라고 기록했다."'
      },
      id: 'A', code: 'OBSERVER', role: 'OBSERVER', origin: 'CANON', theme: 'dark',
      name: 'DR. VANCE', kr: '변정원', en: 'Jeongwon Byeon',
      image: 'https://firebasestorage.googleapis.com/v0/b/lovelog-cc579.firebasestorage.app/o/u%2FSUsvjDLbfxYLwRHEk8LG3n6G6QR2%2Fmu3muzf68ucdg.jpg?alt=media&token=0c5788ff-e3b4-41e0-b738-f9ec1a006012',
      cls: 'S-Class Guide', attr: 'VERDE', unit: 'Head of Harmony', access: 'BLACK',
      quote: { t: '"파장을 실험하기 위해서였다. 훈련실 하나를 통째로. …좋습니다. 그럼 제가 직접 측정하죠."', s: 'Disciplinary interview · Harmony Div.' },
      /* 홈 화면 키워드: y = 세로 위치, x = 컬럼 안쪽 여백, ax/ay = 실루엣에 연결될 지점 */
      /* 검출 박스: x,y,w,h = 실루엣 박스 기준 비율. 라벨은 박스 바깥쪽에 붙음 */
      keywords: [
        { t: 'VERDE', s: 'S-class guide', x: .35, y: .025, w: .30, h: .15 },
        { t: 'HEAD OF HARMONY', s: 'ARCH · Harmony Div.', x: .18, y: .19, w: .28, h: .11 },
        { t: 'RATIONAL', s: 'PFC · override fail', x: .28, y: .31, w: .44, h: .15 },
        { t: 'EX-SURGEON', s: 'Cardiothoracic', x: .12, y: .47, w: .15, h: .10 },
        { t: 'ACCESS · BLACK', s: 'level', x: .40, y: .73, w: .30, h: .17 },
      ],
      ident: [
        ['NAME', '변정원 · Jeongwon Byeon'], ['AGE', '35'], ['SEX', 'Male'], ['CLASS', 'S-Class Guide'],
        ['ATTR', 'Verde'], ['UNIT', 'Head of Harmony'], ['ACCESS', '● BLACK'], ['ORIGIN', 'CaveDuck · @CherryMango'],
      ],
      history: [
        { t: 'BEFORE', h: 'Cardiothoracic · ex-surgeon', p: '심장흉부외과 집도의. 열어 보고, 계측하고, 봉합하는 사람. 사람의 안쪽을 숫자로 읽어내는 습관은 이때 굳어졌다.' },
        { t: 'ARCH', h: 'Harmony Div. · Head', p: 'ARCH 하모니 부서의 수장. S급 가이드로서 센티넬들의 파장을 안정화하고, 징계·연구 권한을 동시에 쥐고 있다.' },
        { t: '251218', h: 'Disciplinary summons', p: '훈련실 B-3를 통째로 얼려버린 센티넬 블랑을 징계 면담에 소환. "자신의 파장을 실험하기 위함이었다"는 답에 황당함과 분노 사이에서, 일말의 기대감과 의무감으로 그녀를 연구 대상으로 지정한다.' },
        { t: 'REDACTED', h: '▮▮▮▮▮▮▮▮', p: '▮▮▮▮ ▮▮▮▮▮▮ ▮▮ ▮▮▮▮▮▮▮ ▮▮▮ ▮▮▮▮. (설정 추가 예정)', red: true },
      ],
      abilities: [
        { n: 'GUIDING', lv: 5, d: 'S급 가이딩. 센티넬의 폭주 파장을 강제 동기화해 끌어내린다.' },
        { n: 'VERDE WAVELENGTH', lv: 5, d: '생장·회복 계열의 파장. 블랑의 Glacies와 98% 매치 · 노드 7개 결속.' },
        { n: 'ANALYSIS', lv: 5, d: '파형 불안정성 σ 0.42 확인, 비선형 브리치(오버클럭) 가설 수립. 관측이 곧 무기.' },
        { n: 'SURGERY', lv: 4, d: '전직 흉부외과의. 손은 아직 정확하다.' },
        { n: 'PFC OVERRIDE', lv: 1, d: '전전두엽 통제 실패. 변연 자극에 대한 억제 불가 — 대상: 김연수.' },
      ],
      relations: [
        { n: 'BLANC', tag: 'SUBJECT → PARTNER', d: '연구 대상이자 등록 파트너. 그녀의 머릿속을 해부하고 싶다는 욕망과, 이미 해부당하고 있다는 자각 사이.' },
        { n: 'HARMONY DIV.', tag: 'HEAD', d: '부서장. 징계·연구 승인 권한. 서명 한 줄로 그녀를 자신의 관측 범위 안에 두었다.' },
        { n: 'VANGUARD T4', tag: 'SUPERVISION', d: '블랑이 속한 뱅가드 4팀. 사고 이후 파견 및 훈련 일정에 관여.' },
        { n: 'ARCH', tag: 'ORG', d: '소속 기관. ACCESS LEVEL BLACK.' },
      ],
      donut: [
        { k: 'RATIONAL', kr: '이성', w: 22, note: '판단은 언제나 계산 위에 있다. 징계 면담에서도 감정보다 먼저 경위와 수치를 요구했다.', ref: 'n03' },
        { k: 'OBSERVER', kr: '관측', w: 18, note: '연구 대상 지정 — SUBJECT/OBSERVER. 관측자는 관측 대상에게 영향을 주지 않아야 한다는 전제가 여기서 무너지기 시작한다.', ref: 'm4' },
        { k: 'EX-SURGEON', kr: '집도', w: 14, note: '"여자의 머릿속을 해부하고 싶다는 남자의 욕망." 외과의의 손버릇이 관계의 방식으로 번역된다.', ref: 'n11' },
        { k: 'DUTY', kr: '의무', w: 16, note: '하모니 부서장으로서의 의무감. 그것이 기대감을 정당화하는 유일한 알리바이였다.', ref: 'n06' },
        { k: 'ANTICIPATION', kr: '기대', w: 12, note: '황당함과 분노 사이, 일말의 기대감. 그는 그것을 연구 승인서라고 불렀다.', ref: 'n04' },
        { k: 'LIMBIC', kr: '변연', w: 18, note: 'AFFECT INDEX 98%. BPM 112 (base 64). PFC OVERRIDE FAIL. 완벽하게 결정된 세계의 유일한 변수.', ref: 'n17' },
      ],
    },
    B: {
      bg: '../리소스/blanc-bg.png',
      syn: {
        t1: 'Below', t2: 'Zero', em: '& still', sub: 'Vanguard Team 4', words: ['impulse', 'curiosity', 'snow'],
        lead: 'I wanted to see how far it goes.', meta: 'SUBJECT · statement',
        para: '파장이 커질수록 체온이 떨어지고, 체온이 떨어질수록 통증이 사라진다. 그래서 어디까지 가는지 알고 싶었다. 그게 다였다.',
        chapter: 'Chapter 1', chapterTag: '훈련실 B-3', chapterText: '4.2초. 멈추기로 마음먹은 게 아니라 몸이 먼저 멈췄다. 사상자는 없었고, 장비 세 대와 벽 12 mm의 얼음이 남았다.',
        day: '18', month: 'Dec · 25', quote: '"박사님도 궁금하시잖아요. 제 파장이요."'
      },
      id: 'B', code: 'SUBJECT', role: 'SUBJECT', origin: 'ORIGINAL', theme: 'dark',
      name: 'BLANC', kr: '김연수', en: 'Yeonsu Kim',
      image: 'https://firebasestorage.googleapis.com/v0/b/lovelog-cc579.firebasestorage.app/o/u%2FSUsvjDLbfxYLwRHEk8LG3n6G6QR2%2Fmu3mvde9mbc2e.jpg?alt=media&token=cc6ebe4a-00ca-4b9c-a321-dc78436a9512',
      cls: 'S-Class Sentinel', attr: 'GLACIES', unit: 'Vanguard Team 4', access: 'RED',
      quote: { t: '"제 파장이 어디까지 가는지 알고 싶었어요. 그게 다예요. …박사님도 궁금하시잖아요."', s: 'Subject statement · self-testing capacity' },
      keywords: [
        { t: 'GLACIES', s: 'S-class sentinel', x: .36, y: .03, w: .28, h: .15 },
        { t: 'VANGUARD TEAM 4', s: 'unit', x: .52, y: .19, w: .28, h: .11 },
        { t: 'IMPULSIVE', s: 'self-testing capacity', x: .32, y: .32, w: .36, h: .14 },
        { t: '-58.0 °C', s: 'full arrest · L3', x: .73, y: .47, w: .15, h: .10 },
        { t: 'ACCESS · RED', s: 'level', x: .38, y: .73, w: .30, h: .17 },
      ],
      ident: [
        ['NAME', '김연수 · Yeonsu Kim'], ['AGE', '25'], ['SEX', 'Female'], ['CLASS', 'S-Class Sentinel'],
        ['ATTR', 'Glacies'], ['UNIT', 'Vanguard Team 4'], ['ACCESS', '● RED'], ['ORIGIN', 'Original character'],
      ],
      history: [
        { t: 'BEFORE', h: '▮▮▮▮▮▮', p: '▮▮▮▮ ▮▮ ▮▮▮▮▮▮ ▮▮▮▮. (각성 이전 설정 추가 예정)', red: true },
        { t: 'ARCH', h: 'Vanguard Team 4', p: '뱅가드 4팀 소속 S급 센티넬. Glacies 속성. 파장이 커질수록 체온이 떨어지고, 체온이 떨어질수록 통증이 사라진다.' },
        { t: '251218', h: 'Incident · Training Room B-3', p: '임계치 돌파(ST-6). 4.2초 만에 훈련실 결빙, 최저 -58.0 °C, 벽면 결빙 12 mm, 장비 3기 손실. 사상자 없음. 진술: "자신의 파장을 실험하기 위함."' },
        { t: 'AFTER', h: 'Subject · registered partner', p: '하모니 부서장 밴스의 연구 대상으로 지정. 눈으로 덮인 시뮬레이션 룸에서 두 사람의 파장이 맞물리기 시작한다.' },
      ],
      abilities: [
        { n: 'CRYO-STASIS · L1', lv: 3, d: '-14.2 °C. 대상 정지. 보관 온도이기도 하다.' },
        { n: 'VITAL SUPPRESS · L2', lv: 4, d: '-32.6 °C. 생체 활동 억제.' },
        { n: 'FULL ARREST · L3', lv: 5, d: '-58.0 °C. 완전 정지. 251218 훈련실에서 처음 기록.' },
        { n: 'OVERCLOCK', lv: 5, d: 'ST-1 체온 35 °C 미만 → ST-4 무통·서맥 → ST-6 실신·결빙. 비선형 브리치.' },
        { n: 'WAVE STABILITY', lv: 1, d: 'σ 0.42. 불안정 확인. 그래서 가이드가 필요하다 — 정확히는, 그 가이드가.' },
      ],
      relations: [
        { n: 'DR. VANCE', tag: 'OBSERVER → PARTNER', d: '관측자이자 등록 파트너. 그의 마음속을 들여다보고 싶다는 호기심. 얼음은 안쪽이 잘 보인다.' },
        { n: 'VANGUARD T4', tag: 'MEMBER', d: '소속 팀. 사고 이후 훈련 제한.' },
        { n: 'HARMONY DIV.', tag: 'DISCIPLINARY', d: '징계 면담 → 연구 승인. 서류상 그녀는 "대상"이다.' },
        { n: 'ARCH', tag: 'ORG', d: '소속 기관. ACCESS LEVEL RED.' },
      ],
      donut: [
        { k: 'GLACIES', kr: '냉기', w: 20, note: '-14.2 / -32.6 / -58.0 °C. 세 개의 임계 온도. 그녀의 세계는 온도로 눈금이 매겨져 있다.', ref: 'n01' },
        { k: 'IMPULSE', kr: '충동', w: 18, note: '"자신의 파장을 실험하기 위함이었다." 훈련실 하나를 실험 도구로 쓴 사람의 진술.', ref: 'n03' },
        { k: 'CURIOSITY', kr: '호기심', w: 16, note: '상대의 마음속을 들여다보고 싶어하는 여자의 호기심. 관측자를 관측하는 대상.', ref: 'n12' },
        { k: 'σ 0.42', kr: '불안정', w: 14, note: '파형 불안정성 확인. 결정론적 세계의 노이즈. 밴스는 이것을 "변수"라고 적었다.', ref: 'n07' },
        { k: 'VANGUARD', kr: '뱅가드', w: 14, note: '뱅가드 4팀. 제일 앞에 서는 사람. 제일 먼저 얼어붙는 사람.', ref: 'm0' },
        { k: 'SNOW', kr: '눈', w: 18, note: '온통 눈으로 뒤덮인 시뮬레이션 룸 한가운데 서 있던 그녀. 밴스가 김연수라는 사람 자체에 흥미를 느낀 순간.', ref: 'n09' },
      ],
    },
  },

  /* ===================================================================
     3. INTRO — 스크롤 화면
     =================================================================== */
  /* -------------------------------------------------------------------
     HOME INTRO (스크롤 첫 화면)
     labels: step = 몇 번째 스크롤 칸부터 뜨는지(1~3)
             at   = 연결선 끝점. 해당 캐릭터 실루엣 박스 기준 [x, y] 비율
             side = 라벨이 붙는 쪽 L/R,  y = 화면 높이 기준 세로 위치
     windows: 마지막 화면 일러스트 위 박스. r = 이미지 기준 [x0, y0, x1, y1] 비율
              go 가 있으면 클릭 → 프로필
     ------------------------------------------------------------------- */
  intro: {
    final: '../리소스/KakaoTalk_Photo_2026-08-04-13-12-28.png',
    A: {
      code: 'HEAD OF HARMONY', name: 'Dr. Vance', role: 'Observer', no: 'S-1223',
      k1: 'ATTR :', v1: 'Verde. 생장·회복 계열 파장. 하모니 부서장 — 센티넬의 폭주 파장을 강제 동기화해 끌어내린다.',
      k2: 'QUOTE :', v2: '"방금 그 말, 책임질 수 있습니까?"',
      labels: [
        { step: 1, at: [.63, .07], side: 'L', y: .14, k: '01 · Name', v: 'Dr. Vance', s: '변정원 · Jeongwon Byeon' },
        { step: 1, at: [.80, .15], side: 'R', y: .20, k: '02 · Role', v: 'Observer', s: 'OBSERVER · canon' },
        { step: 2, at: [.22, .24], side: 'L', y: .31, k: '03 · Age / Sex', v: '35 · Male', s: '전직 흉부외과 집도의' },
        { step: 2, at: [.88, .34], side: 'R', y: .36, k: '04 · Class', v: 'S-Class Guide', s: 'Guiding Lv.5' },
        { step: 3, at: [.12, .42], side: 'L', y: .48, k: '05 · Attr', v: 'Verde', s: '생장·회복 계열 파장' },
        { step: 3, at: [.62, .52], side: 'R', y: .52, k: '06 · Access', v: '● Black', s: 'Head of Harmony · ARCH' },
      ],
    },
    B: {
      theme: 'light',   /* 홈 스크롤에서 Blanc 구간 색 (프로필은 DATA.chars.B.theme) */
      code: 'MASTER OF SNOWSCAPE', name: 'Blanc', role: 'Subject', no: 'S-0904',
      k1: 'ATTR :', v1: 'Glacies. 파장이 커질수록 체온이 떨어지고, 체온이 떨어질수록 통증이 사라진다. 최저 -58.0 °C.',
      k2: 'QUOTE :', v2: '"제 파장이 어디까지 가는지 알고 싶었어요. 그게 다예요. …박사님도 궁금하시잖아요."',
      labels: [
        { step: 1, at: [.38, .08], side: 'R', y: .14, k: '01 · Name', v: 'Blanc', s: '김연수 · Yeonsu Kim' },
        { step: 1, at: [.12, .16], side: 'L', y: .20, k: '02 · Role', v: 'Subject', s: 'SUBJECT · original' },
        { step: 2, at: [.80, .27], side: 'R', y: .31, k: '03 · Age / Sex', v: '25 · Female', s: '뱅가드 4팀 센티넬' },
        { step: 2, at: [.07, .30], side: 'L', y: .37, k: '04 · Class', v: 'S-Class Sentinel', s: 'Vanguard Team 4' },
        { step: 3, at: [.96, .52], side: 'R', y: .48, k: '05 · Attr', v: 'Glacies', s: '-58.0 °C · full arrest' },
        { step: 3, at: [.40, .56], side: 'L', y: .53, k: '06 · Access', v: '● Red', s: 'σ 0.42 · unstable' },
      ],
    },
    pair: {
      code: 'OBSERVER × SUBJECT', name: 'Vance × Blanc', role: 'Match', no: '98%',
      k1: 'NODE :', v1: 'GLACIES × VERDE. 매치 98%, 노드 ×7. 등록 파트너는 모든 가이딩 작전에서 우선권을 가진다.',
      k2: 'STATUS :', v2: '연구원과 연구 대상, 공식 파트너, 그리고….',
      labels: [
        { c: 'A', at: [.63, .07], side: 'L', y: .16, k: 'Observer', v: 'Dr. Vance', s: 'Verde · 35' },
        { c: 'B', at: [.38, .08], side: 'R', y: .22, k: 'Subject', v: 'Blanc', s: 'Glacies · 25' },
        { c: 'B', at: [.04, .30], side: 'R', y: .42, k: 'Match', v: '98% · Node ×7', s: 'registered partner' },
      ],
    },
    windows: [
      /* go 가 있는 박스 = 얼굴. 클릭 → 프로필 */
      { go: 'B', r: [.29, .27, .49, .64], t: 'Blanc', s: '김연수 · Sentinel', tag: 'open file · subject' },
      { go: 'A', r: [.495, .07, .72, .405], t: 'Dr. Vance', s: '변정원 · Guide', tag: 'open file · observer' },
      /* 아래는 호버해야 보이는 사진 박스. 평소엔 테두리만, 호버 시 img 가 보임.
         img  = 사진 경로/URL (비우면 그 자리의 일러스트)
         box  = [x0, y0, x1, y1]  큰 패널 기준 비율 (0=패널 왼쪽/위, 1=오른쪽/아래, 음수·1초과 = 패널 밖으로)
         boxT = 세로 화면용 */
      { t: 'Glacies', s: '-58.0 °C', box: [-.028, -.010, .258, .575], boxT: [-.02, .02, .42, .40], img: '' },
      { t: 'Wrist temp', s: '+24 ΔHR', box: [.289, -.012, .490, .214], boxT: [.56, -.04, 1.02, .22], img: '' },
      { t: 'Lead II', s: 'ECG · 112 bpm', box: [.745, -.012, 1.028, .334], boxT: [.60, .30, 1.02, .52], img: '' },
      { t: 'Snowfield', s: '260103', box: [.757, .283, 1.028, .702], boxT: [-.02, .46, .46, .74], img: '' },
      { t: 'Splash', s: '260714', box: [.145, .511, .379, 1.007], boxT: [.30, .66, .74, .92], img: '' },
      { t: 'Proximity', s: '< 30 cm', box: [.621, .735, .938, 1.007], boxT: [.62, .78, 1.02, 1.0], img: '' },
    ],
  },

  /* ===================================================================
     4. TIMELINE
     =================================================================== */
  /* -------------------------------------------------------------------
     TIMELINE
     majors: 시간축 위의 주요 서사(챕터). 순서대로 배치됨. body = 노드 옆에 항상 보이는 본문(문단 배열)
     minors: 자잘한 사건·대화·메모. links 로 연결. kind = event | dialogue | note
     chars: ['A'], ['B'], ['A','B']
     ------------------------------------------------------------------- */
  timeline: {
    majors: [
      {
        id: 'm0', body: ["ARCH 하모니 부서 총책임자 밴스, 그리고 뱅가드 4팀의 S급 센티넬 블랑. 밴스에게 블랑은 서류 상의 수많은 S급 센티넬 중 하나에 불과했고, 블랑에게 밴스는 웬만해서 볼 일 없는 상관에 불과했다. 같은 조직에 속해 있지만, 만날 일은 없는. 두 사람의 관계는 딱 거기까지였다.", "밴스에게 세계는 계측 가능한 데이터의 합이었다. 파장은 수치로, 감정은 오차로 기록됐고, 결정론적인 세계에는 어떠한 변수도 없었다. 아직까지는."], t: '...', title: '결정론적 세계', en: 'Baseline', chars: ['A', 'B']
      },
      {
        id: 'm1', body: ["하모니 부서 징계 면담 호출. 사유는 훈련실 동파. S급 센티넬 블랑이 사용한 B-2 훈련장을 비롯, 같은 층의 모든 훈련실이 전면 동결되어 사용 불능 상태가 되었다.", "밴스는 그녀에게 의도를 물었고, 블랑은 '파장을 실험하기 위해서였다'고 답한다. 황당함이나 분노와 같은 감정이 밴스를 휩쓸고 나면, 마지막에 남는 것은 흥미였다. 궤변이라고 생각하면서도 궁금해졌다. 그녀의 파장이, 그녀의 생각이. 밴스는 그녀를 집중관리대상이자 '연구대상'으로 지정하고, 매일 오전 8시 그의 연구실로 출근할 것을 지시했다."], t: 'D+1', title: '실험의 결과', en: 'Encounter', chars: ['B']
      },
      {
        id: 'm2', body: ["블랑을 대상으로 한 연구는 그녀가 원한 것이기도 했고, 그녀가 받는 징계의 일부이기도 했다. 그것을 핑계로 밴스는 가혹한 실험을 이어간다. 블랑과 그녀의 파장이 어디까지 견딜 수 있는지 시험하는 나날의 연속.", "그러나 그녀가 밴스의 눈앞에 보여준 것은 그가 예상한 그 이상이었다. 영하 58.6 °C 언저리로 설정된 시뮬레이션 룸 한가운데, 블랑은 하얗게 눈보라를 휘날리며 서있었다. 무릎까지 쌓인 눈에도 개의치 않고, 새하얗게 변한 머리카락을 휘날리며. 그날, 그녀의 능력에 '설경'이라는 이름이 붙었다. 그는 생각했다. 저 여자를 해부하고 싶다고."], t: 'D+4', title: '설경의 해부', en: 'FIRST OUTLIER', chars: ['A', 'B'],
      },
      {
        id: 'm3', body: ["오버클럭의 위험성을 직감한 밴스는 능력의 과잉 사용 없이도 임무를 수행할 수 있어야 한다고 주장하며 강도 높은 훈련을 이어간다. 냉기 흡수 패널을 부착해 그녀의 능력이 제대로 동작하지 않는 환경 속, 괴수들이 밀려드는 미로를 탈출하라. 제한 시간 내에 탈출해야 한다는 으름장까지 놓았다.", "그리고, 그녀는 기어코 해냈다. 책임자님 저 미워하지 마세요 어쩌고... 밴스는 기절한 그녀를 안아들고 의무실까지 달리며 생각한다. 언제부터 이렇게 되었는지."], t: 'D+7', title: '내기의 승자', en: 'Nevertheless', chars: ['A'],
      },
    ],
    minors: [
      { id: 'n01', kind: 'event', chars: ['B'], title: '4.2초', d: '임계치 돌파에서 완전 결빙까지 4.2초. 그녀가 멈추기로 마음먹은 것이 아니라, 몸이 먼저 멈췄다.', links: ['m1'] },
      { id: 'n02', kind: 'event', chars: ['B'], title: '장비 3기 손실', d: '훈련용 표적기 3기 파손. 벽면 결빙 12 mm. 사상자 없음 — 이 한 줄이 징계 수위를 결정했다.', links: ['m1', 'n01'] },
      { id: 'n03', kind: 'dialogue', chars: ['A', 'B'], title: '경위 진술', lines: [['A', '경위를 말해보십시오. 훈련실 하나를 통째로 얼린 이유를.'], ['B', '제 파장을 실험하고 있었습니다.'], ['A', '…실험.'], ['B', '네. 어디까지 가는지 알고 싶어서요.']], links: ['m2', 'm1'] },
      { id: 'n04', kind: 'note', chars: ['A'], title: '황당함과 분노 사이', d: '그 사이에 있던 것은 일말의 기대감이었다. 밴스는 그것을 의무감이라고 기록했다.', links: ['m2', 'm4'] },
      { id: 'n05', kind: 'dialogue', chars: ['A', 'B'], title: '"박사님도 궁금하시잖아요"', lines: [['B', '박사님도 궁금하시잖아요. 제 파장이요.'], ['A', '제가 궁금한 건 당신의 판단력입니다.'], ['B', '그것도 같이 보시면 되죠.']], links: ['m2', 'n03'] },
      { id: 'n06', kind: 'note', chars: ['A'], title: '의무감이라는 알리바이', d: '연구 승인서에 서명하며 그는 이것이 부서장으로서의 의무라고 세 번 되뇌었다. 세 번이나.', links: ['m4', 'n04'] },
      { id: 'n07', kind: 'event', chars: ['A'], title: 'σ 0.42', d: '파형 불안정성 확인. 통상 S급의 허용 범위를 넘는 수치. 결정론적 세계의 노이즈.', links: ['m3'] },
      { id: 'n08', kind: 'event', chars: ['A'], title: '비선형 브리치 가설', d: '오버클럭 단계가 선형으로 진행되지 않는다. ST-4에서 ST-6로 건너뛴다. 통증이 사라진 뒤에는 브레이크가 없다.', links: ['m3', 'n07', 'm1'] },
      { id: 'n09', kind: 'event', chars: ['A', 'B'], title: '눈밭 한가운데', d: '시뮬레이션 룸 전체가 눈으로 덮였다. 그 한가운데 그녀가 서 있었다. 밴스는 데이터를 보러 왔다고 스스로에게 말했다.', links: ['m5'] },
      { id: 'n10', kind: 'dialogue', chars: ['A', 'B'], title: '"추우세요?"', lines: [['B', '추우세요?'], ['A', '…데이터가 필요합니다. 계속하세요.'], ['B', '손이 떨리시는데요.'], ['A', '계측 오차입니다.']], links: ['m5', 'n09'] },
      { id: 'n11', kind: 'note', chars: ['A'], title: '해부하고 싶다', d: '여자의 머릿속을 해부하고 싶다는 남자의 욕망. 외과의의 언어로 번역된 관심.', links: ['m5', 'm4'] },
      { id: 'n12', kind: 'note', chars: ['B'], title: '들여다보고 싶다', d: '상대의 마음속을 들여다보고 싶어하는 여자의 호기심. 관측자를 관측하는 대상.', links: ['m5', 'n11'] },
      { id: 'n13', kind: 'event', chars: ['A', 'B'], title: 'Eye contact · 2.0 s', d: 'ΔHR +12. 관측자 ECG, Lead II. 대상이 시야에 있음.', links: ['m5', 'm6'] },
      { id: 'n14', kind: 'event', chars: ['A', 'B'], title: 'Wrist temp check', d: 'ΔHR +24. 손목 체온 확인은 프로토콜이다. 프로토콜이 6초 넘게 걸릴 이유는 없다.', links: ['m5', 'n13'] },
      { id: 'n15', kind: 'event', chars: ['A', 'B'], title: 'First name · "연수"', d: 'ΔHR +31. 처음으로 성이 아닌 이름을 불렀다. 본인도 모르게.', links: ['m6', 'n16'] },
      { id: 'n16', kind: 'dialogue', chars: ['A', 'B'], title: '"…연수 씨."', lines: [['A', '…연수 씨.'], ['B', '지금 뭐라고 하셨어요?'], ['A', '김연수 센티넬.'], ['B', '아니요, 아까요.']], links: ['m6'] },
      { id: 'n17', kind: 'event', chars: ['A'], title: 'PFC override fail', d: 'AFFECT INDEX 98%. BPM 112 (base 64). LIMBIC HYPERACTIVE. 전전두엽 통제 실패.', links: ['m6', 'n13', 'n15'] },
      { id: 'n18', kind: 'event', chars: ['A', 'B'], title: 'Proximity < 30 cm', d: 'SPIKE. 측정 불가. 기록 중단.', links: ['m6', 'n17'] },
      { id: 'n19', kind: 'note', chars: ['A', 'B'], title: '변연계', d: '변정원 + 김연수 → 변연. 두 이름에서 한 글자씩. 이성적 통제와 정서적 충동의 경계.', links: ['m0', 'm7'] },
      { id: 'n20', kind: 'note', chars: ['A', 'B'], title: '유일한 변수', d: 'The only variable in perfectly deterministic world. 서로가 서로의.', links: ['m7', 'n19', 'n17'] },
    ],
  },
};
