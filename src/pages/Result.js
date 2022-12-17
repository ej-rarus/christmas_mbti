import React, { useCallback, useContext, useState } from "react";
import { DataConsumer } from "../contexts/data";
import SituationContext from "../contexts/situation";

function Result() {
  const results = [
    {
      id: "ENFJ",
      prefix: "맨앞에서 썰매를 끄는",
      character: "루돌프",
      message: '"앗, 어쩌다보니 내가 다 들고왔네 헤헤"',
      personality:
        "따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많습니다. 상당히 이타적이고 민첩하고 인화를 중요시하며 참을성이 많으며, 다른 사람들의 생각이나 의견에 진지한 관심을 가지고 공동선을 위하여 다른 사람의 의견에 대체로 동의합니다. 미래의 가능성을 추구하며 편안하고 능란하게 계획을 제시하고 집단을 이끌어가는 능력이 있습니다. 때로 다른 사람들의 좋은 점을 지나치게 이상화하는 경향이 있으며 다른 사람들에 대해서도 자기와 같을 것이라고 생각하는 경향이 있습니다. 모임을 좋아하며 대화를 적극적으로 이끌어나갑니다. 타인의 반응에 대해서 더 예민하고, 말을 할때도 다른 사람한테 어려움이 될 수 있는 말은 꺼내지 않는 편입니다.",
      likes: "친구들의 고민 들어주기, 새로운 친구 만들기",
      dislikes: "예의나 배려가 없는 사람",
      good: "북극여우,천사",
      bad: "소나무, 눈사람",
    },
    {
      id: "ENFP",
      prefix: "크리스마스 카드를 쓰는",
      character: "꼬마",
      message: '"이거랑 저거, 그리고 요것도 주세요!"',
      personality:
        "자유로운 사고의 소유자입니다. 종종 분위기 메이커 역할을 하기도 하는 이들은 단순한 인생의 즐거움이나 그때그때 상황에서 주는 일시적인 만족이 아닌 타인과 사회적, 정서적으로 깊은 유대 관계를 맺음으로써 행복을 느낍니다. 매력적이며 독립적인 성격으로 활발하면서도 인정이 많은 이들은 인구의 대략 7%에 속하며, 어느 모임을 가든 어렵지 않게 만날 수 있습니다. 따뜻하고 정열적이고 활기가 넘치며 재능이 많고 상상력이 풍부합니다. 온정적이고 창의적이며 항상 새로운 가능성을 찾고 시도하는 유형으로 문제 해결에 재빠르고 관심이 있는 일은 무엇이든지 수행해 내는 능력과 열성이 있습니다. 다른 사람들에게 관심을 쏟으며 사람들을 잘 다루고 뛰어난 통찰력으로 도움을 줍니다. 반복되는 일상적인 일을 참지 못하고 열성이 나지 않습니다. 또한 한 가지 일을 끝내기도 전에 몇 가지 다른 일을 또 벌이는 경향을 가지고 있습니다. 통찰력과 창의력이 요구되지 않는 일에는 흥미를 느끼지 못하고 열성을 불러일으키지 못합니다.",
      likes: "동물 친구와 이야기하기, 그림일기쓰기",
      dislikes: "배신, 모호함",
      good: "천사, 산타",
      bad: "엘프, 북극곰",
    },
    {
      id: "ENTJ",
      prefix: "냉철한 눈빛을 가진",
      character: "펭귄",
      message: '"음, 훌륭한 크리스마스 장식이다."',
      personality:
        "통솔자형 사람은 천성적으로 타고난 리더입니다. 이 유형에 속하는 사람은 넘치는 카리스마와 자신감으로 공통의 목표 실현을 위해 다른 이들을 이끌고 진두지휘합니다. 예민한 성격의 사회운동가형 사람과 달리 이들은 진취적인 생각과 결정력, 그리고 냉철한 판단력으로 그들이 세운 목표 달성을 위해 가끔은 무모하리만치 이성적 사고를 하는 것이 특징입니다. ENTJ는 인구의 단 3%에 해당하는 유형입니다. 통솔자형 사람은 크든 작든 성취 가능한 도전에 매력을 느낍니다. 이들은 충분한 시간과 자원만 있으면 그 어떤 것도 실현 가능하다고 믿습니다. 이것이 통솔자형 사람을 뛰어난 사업가로 만드는 이들만의 성격적 자질로, 전략적인 사고와 장기적인 안목과 더불어 빠른 판단력과 정확성으로 계획을 단계별로 실행해 나감으로써 진정한 리더의 역할을 합니다. 보통의 사람이라면 포기하고 말 일들도 대단한 의지력으로 꾸준히 밀어붙이는데, 이는 이들에게 있어 자아실현을 위한 자기 암시이기도 합니다. 또한 뛰어난 사회성을 발휘하여 다른 동료들을 채찍질함으로써 함께 더 큰 성공과 성취를 이루고자 합니다.",
      likes: "효율적으로 가구 배치하기, 혼잣말하며 계획세우기",
      dislikes: "비효율적으로 일하기",
      good: "북극여우, 꼬마",
      bad: "테디베어, 벽난로",
    },
    {
      id: "ENTP",
      prefix: "투머치토커",
      character: "호두까기 인형",
      message: '"옳게 된 크리스마스란 무엇이냐 하면~"',
      personality:
        "변론가형 사람은 타인이 믿는 이념이나 논쟁에 반향을 일으킴으로써 군중을 선동하는 일명 선의의 비판자입니다. 결단력 있는 성격 유형이 논쟁 안에 깊이 내재한 숨은 의미나 상대의 전략적 목표를 꼬집기 위해 논쟁을 벌인다고 한다면, 변론가형 사람은 단순히 재미를 이유로 비판을 일삼습니다. 아마도 이들보다 논쟁이나 정신적 고문을 즐기는 성격 유형은 없을 것입니다. 이는 천부적으로 재치 있는 입담과 풍부한 지식을 통해 논쟁의 중심에 있는 사안과 관련한 그들의 이념을 증명해 보일 수 있기 때문입니다. ENTP 특징은 본인이 구상하는 바를 실현시키고 싶어 하는 기질이 강하며, 여기에 특유의 아웃사이더적인 성격까지 겹쳐 말 그대로 혁명가의 기질을 띠고 있습니다. 모든 분야에 있어서, 기존의 체제 자체를 뒤집어 버리거나 분야 전체의 도약을 이루어내는 인물들이 많습니다. 허나 반복되는 업무, 혹은 본인이 흥미가 없는 일에는 도통 손을 대려 하지 않습니다.",
      likes: "내 말이 맞다고 인정받기, 사람들에게 주목받기",
      dislikes: "관심없는 이야기 듣기",
      good: "천사, 산타",
      bad: "소나무, 테디베어",
    },
    {
      id: "ESFJ",
      prefix: "끝을 알 수 없는",
      character: "선물자루",
      message: '"응? 선물? 기다려봐, 구에에엑!"',
      personality:
        "사교형 사람을 한마디로 정의 내리기는 어렵지만, 간단히 표현하자면 이들은 ‘인기쟁이’입니다. 인구의 대략 12%를 차지하는 꽤 보편적인 성격 유형으로, 이를 미루어 보면 왜 이 유형의 사람이 인기가 많은지 이해가 갑니다. 이들은 분위기를 좌지우지하며 여러 사람의 스포트라이트를 받거나 학교에 승리와 명예를 불러오도록 팀을 이끄는 역할을 하기도 합니다. 이들은 또한 훗날 다양한 사교 모임이나 어울림을 통해 주위 사람들에게 끊임없는 관심과 애정을 보임으로써 다른 이들을 행복하고 즐겁게 해주고자 노력합니다. 동정심이 많고 다른 사람에게 관심을 쏟으며 인화를 중시합니다. 타고난 협력자로서 동료애가 많고 친절하며 능동적인 구성원입니다. 이야기 하기를 즐기며 정리정돈을 잘하고, 참을성이 많고 다른 사람들을 잘 도와줍니다. 사람을 다루고 행동을 요구하는 분야, 예를 들면 교직, 성직, 판매 특히 동정심을 필요로 하는 간호나 의료 분야에 적합합니다. 일이나 사람 관련 문제에 대하여 냉철한 입장을 취하기 어려워하고, 반대 의견에 부딪혔을 때, 자신의 요구가 거절당했을 때 마음의 상처를 받습니다.",
      likes: "취미를 모으는 취미, 새로운 친구 만들기",
      dislikes: "다른 사람의 말에 귀기울이지 않는 사람",
      good: "코코넛, 엘프",
      bad: "북극여우, 천사",
    },
    {
      id: "ESFP",
      prefix: "훌라춤을 추는",
      character: "북극곰",
      message: '"같이 춤춰요~"',
      personality:
        "사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적입니다. 어떤 상황이든 잘 적응하고 현실적이고 실제적인 유형입니다. 주위의 사람이나 일어나는 일에 대하여 관심이 많으며 사람이나 사물을 다루는 사실적인 상식이 풍부합니다. 때로는 수다스럽고, 진지함이 결여되거나 마무리를 등한시하는 경향이 있으나, 어떤 조직체나 공동체에서 밝고 재미있는 분위기 조성 역할을 잘합니다.",
      likes: "깜짝파티, 친구들과 어울리기",
      dislikes: "지루함, 외로움",
      good: "소나무, 벽난로",
      bad: "북극여우, 루돌프",
    },
    {
      id: "ESTJ",
      prefix: "곰곰이 생각하는",
      character: "테디베어",
      message: '"곰곰..."',
      personality:
        "관리자형 유형은 그들 생각에 반추하여 무엇이 옳고 그른지를 따져 사회나 가족을 하나로 단결시키기 위해 사회적으로 받아들여지는 통념이나 전통 등 필요한 질서를 정립하는 데 이바지하는 대표적인 유형입니다. 정직하고 헌신적이며 위풍당당한 이들은 비록 험난한 가시밭길이라도 조언을 통하여 그들이 옳다고 생각하는 길로 사람들을 인도합니다. 군중을 단결시키는 데에 일가견이 있기도 한 이들은 종종 사회에서 지역사회조직가와 같은 임무를 수행하며, 지역 사회 발전을 위한 축제나 행사에서부터 가족이나 사회를 하나로 결집하기 위한 사회 운동을 펼치는 데 사람들을 모으는 역할을 하기도 합니다. 이들은 주변 상황을 잘 판단하여 명확하고 증명이 가능한 확실한 사실에 근거하여 사고하는 경향이 있습니다. 이리하여 만일 이들의 의견이나 결정 내린 사항이 심한 반대 의견에 부딪혔을 때 이들로 하여금 무엇이 가능하고 불가능한지를 정확히 판단하여 본연의 믿음이나 생각을 고수한 채 꿋꿋이 헤쳐나갈 수 있게 합니다. 말을 허투루 하지 않는 이들은 성취하기 어려운 고된 일도 마다치 않고 기꺼이 뛰어들어 구체적으로 실행 계획을 세워 난해해 보이는 일도 수월히 실행해 나갑니다.",
      likes: "책상을 깔끔하게 정리하기, 어제읽은 책 설명하기",
      dislikes: "불필요한 시간낭비",
      good: "진저브레드맨, 엘프",
      bad: "루돌프, 천사",
    },
    {
      id: "ESTP",
      prefix: "손난로를 파는",
      character: "눈사람",
      message: '"자아, 아무때나 살 수 있는게 아니에요!"',
      personality:
        "주변에 지대한 영향을 주는 사업가형 사람은 여러 사람이 모인 행사에서 이 자리 저 자리 휙휙 옮겨 다니는 무리 중에서 어렵지 않게 찾아볼 수 있습니다. 직설적이면서도 친근한 농담으로 주변 사람을 웃게 만드는 이들은 주변의 이목을 끄는 것을 좋아합니다. 만일 관객 중 무대에 올라올 사람을 호명하는 경우, 이들은 제일 먼저 자발적으로 손을 들거나 아니면 쑥스러워하는 친구를 대신하여 망설임 없이 무대에 올라서기도 합니다. 국제사회 이슈나 이와 관련한 복잡하고 난해한 이론과 관련한 담화는 이들의 관심을 오래 붙잡아 두지 못합니다. 사업가형 사람은 넘치는 에너지와 어느 정도의 지식으로 대화에 무리 없이 참여하기는 하나, 이들이 더 역점을 두는 것은 앉아서 말로만 하는 논의가 아닌 직접 나가 몸으로 부딪히는 것입니다. 행동이 먼저 앞서기도 하는 이들은 이로 인해 가끔 실수를 범하기도 하지만 이들은 단순히 턱 괴고 앉아 지켜만 보고 있느니 만약의 사태를 대비해 만반의 준비를 한 뒤라면 직접 나가 몸으로 부딪혀 문제를 해결해 나가는 것을 선호합니다.",
      likes: "새로운 일에 도전하기, 내 생각을 말하고 설득하기",
      dislikes: "단조로운 일상, 관습",
      good: "벽난로, 소나무",
      bad: "천사, 루돌프",
    },
    {
      id: "INFJ",
      prefix: "우는 아이에게도 선물주는",
      character: "천사",
      message: '"울고 싶으면 울어도 돼~"',
      personality:
        "선의의 옹호자형은 가장 흔치 않은 성격 유형으로 인구의 채 1%도 되지 않습니다. 그럼에도 불구하고 나름의 고유 성향으로 세상에서 그들만의 입지를 확고히 다집니다. 이들 안에는 깊이 내재한 이상향이나 도덕적 관념이 자리하고 있는데, 다른 외교형 사람과 다른 점은 이들은 단호함과 결단력이 있다는 것입니다. 바라는 이상향을 꿈꾸는데 절대 게으름 피우는 법이 없으며, 목적을 달성하고 지속적으로 긍정적인 영향을 미치고자 구체적으로 계획을 세워 이행해 나갑니다. 인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다. 창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 말없이 영향력을 끼칩니다. 독창성과 내적 독립심이 강하며, 확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는 정신적 지도자들이 많습니다. 나무보다 숲을 보는 편입니다. 한곳에 몰두하는 경향으로 목적 달성에 필요한 주변적인 조건들을 경시하기 쉽고, 자기 내부의 갈등이 많고 복잡합니다. 이들은 풍부하고 감성적인 내적인 성격을 갖고 있습니다.",
      likes: "동물친구와 이야기하기, 친구의 고민 해결해주기",
      dislikes: "너무 많은 생각을 하기, 한번에 여러가지 일을 하기",
      good: "꼬마, 루돌프",
      bad: "코코넛, 북극곰",
    },
    {
      id: "INFP",
      prefix: "캔디케인을 나눠주는",
      character: "북극여우",
      message: '"자 이거 받아!"',
      personality:
        "중재자형 사람은 최악의 상황이나 악한 사람에게서도 좋은 면만을 바라보며 긍정적이고 더 나은 상황을 만들고자 노력하는 진정한 이상주의자입니다. 간혹 침착하고 내성적이며 심지어는 수줍음이 많은 사람처럼 비추어지기도 하지만, 이들 안에는 불만 지피면 활활 타오를 수 있는 열정의 불꽃이 숨어있습니다. 인구의 대략 4%를 차지하는 이들은 간혹 사람들의 오해를 사기도 하지만, 일단 마음이 맞는 사람을 만나면 이들 안에 내재한 충만한 즐거움과 넘치는 영감을 경험할 수 있을 것입니다. NFP 특징은 논리나 단순한 흥미로움, 혹은 인생의 실용적인 부분이 아닌 그들 나름의 원리원칙에 근거하여 사고하고 행동합니다. 더욱이 성취에 따르는 보상이나 그렇지 못할 경우에 생길 수 있는 불이익 여부에 상관없이 순수한 의도로 인생의 아름다움이나 명예 그리고 도덕적 양심과 미덕을 좇으며 나름의 인생을 설계해 나갑니다. 그리고 그러한 본인들의 생각과 행동에 자부심을 느끼기도 하는데, 이는 마땅한 일입니다. 하지만 모든 사람이 그들의 생각 뒤에 숨은 동기나 의미를 정확히 파악하지는 못하는데, 이는 자칫 이들을 외톨이로 만들 수도 있습니다.",
      likes: "친구의 고민 들어주기, 일기쓰기",
      dislikes: "다른 사람의 눈치보기",
      good: "루돌프, 펭귄",
      bad: "선물자루, 벽난로",
    },
    {
      id: "INTJ",
      prefix: "여름휴가 계획을 세우는",
      character: "산타",
      message: '"이번에는 여기가 좋겠어"',
      personality:
        "INTJ는 전략적 사고에 뛰어나며 전체 인구의 2%에 해당하는 이들은 유독 여성에게서는 더욱 찾아보기 힘든 유형으로, 인구의 단 0.8%를 차지합니다. 체스를 두는 듯한 정확하고 계산된 움직임과 풍부한 지식을 소유하고 있는 이들은 그들과 견줄 만한 비슷한 부류의 사람을 찾는 데 종종 어려움을 겪습니다. 건축가형 사람은 상상력이 풍부하면서도 결단력이 있으며, 야망이 있지만 대외적으로 표현하지 않으며, 놀랄 만큼 호기심이 많지만 쓸데없는 데 에너지를 낭비하는 법이 없습니다. INTJ의 지식을 향한 갈증은 어릴 적부터 두드러지게 나타나는데, 때문에 건축가형 사람은 어릴 때 ‘책벌레’라는 소리를 자주 듣습니다. 대개 친구들 사이에서는 놀림의 표현임에도 불구하고 전혀 개의치 않아 하며, 오히려 깊고 넓은 지식을 가지고 있는 그들 자신에게 남다른 자부심을 느낍니다. 이들은 또한 관심 있는 특정 분야에 대한 그들의 방대한 지식을 다른 이들과 공유하고 싶어 하기도 합니다. 반면, 일명 가십거리와 같이 별 볼 일 없는 주제에 대한 잡담거리보다는 그들 나름의 분야에서 용의주도하게 전략을 세우거나 이를 실행해 옮기는 일을 선호합니다.",
      likes: "좋아하는 분야를 밤새 조사하기, 책읽기, 수학문제풀기",
      dislikes: "자기 주장이 강한 사람",
      good: "꼬마, 눈사람",
      bad: "벽난로, 선물자루",
    },
    {
      id: "INTP",
      prefix: "새로운 맛을 연구하는",
      character: "진저브레드맨",
      message: '"작년보다 더 맛있을거야!"',
      personality:
        "사색가형은 전체 인구의 3% 정도를 차지하는 꽤 흔치 않은 성격 유형으로, 이는 그들 자신도 매우 반기는 일입니다. 왜냐하면, 사색가형 사람보다 ‘평범함’을 거부하는 이들이 또 없기 때문입니다. 이 유형의 사람은 그들이 가진 독창성과 창의력, 그리고 그들만의 독특한 관점과 왕성한 지적 호기심에 나름의 자부심을 가지고 있습니다. 보통 철학자나 사색가, 혹은 몽상에 빠진 천재 교수로도 많이 알려진 이들은 역사적으로 수많은 과학적 발전을 이끌어 내기도 하였습니다. INTP 특징은 조용하고 과묵하며 논리와 분석으로 문제를 해결하기를 좋아합니다. 먼저 대화를 시작하지 않는 편이나 관심이 있는 분야에 대해서는 말을 많이 하는 편입니다. 이해가 빠르고 직관력으로 통찰하는 능력이 있으며 지적 호기심이 많아, 분석적이고 논리적입니다. MBTI 16가지 성격 유형 중 창의적 지능과 논리면에서 가장 뛰어나, 비과학적이거나 논리적이지 못한 일들에 대단히 거부반응을 보일 경향이 높습니다. 아이디어와 원리, 인과관계에 관심이 많으며 실체보다는 실체가 안고 있는 가능성에 관심이 많습니다.",
      likes: "새로운 쿠키 레시피 만들기, 혼자만의 시간 보내기",
      dislikes: "무식한 사람, 허세부리기",
      good: "루돌프, 펭귄",
      bad: "선물자루, 소나무",
    },
    {
      id: "ISFJ",
      prefix: "언제나 따끈한",
      character: "벽난로",
      message: '"오우, 춥니? 이리와~"',
      personality:
        "무엇을 받으면 몇 배로 베푸는 진정한 이타주의자로 열정과 자애로움으로 일단 믿는 이들이라면 타인과도 잘 어울려 일에 정진합니다. 약 13%로 꽤 높은 인구 비율을 차지하는데, 인구 대다수를 차지하는 데 있어 이들보다 더 나은 성격 유형은 아마 없을 것입니다. 이들은 종종 의료 부분이나 학문, 혹은 사회단체와 같이 오랜 역사나 전통과 관련된 분야에 종사합니다. ISFJ 특징 유형 성격의 소유자는 조용하고 차분하며 따뜻하고 친근합니다. 책임감과 인내력 또한 매우 강하며, 본인의 친한 친구나 가족에게 애정이 가득합니다. 이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 유형입니다.",
      likes: "다른 사람을 돕기, 동식물을 가만히 관찰하기",
      dislikes: "감정에 휘둘리는 것",
      good: "북극곰, 눈사람",
      bad: "꼬마, 천사",
    },
    {
      id: "ISFP",
      prefix: "스키를 즐기는",
      character: "코코넛",
      message: '"겨울이면 어때, 신나잖아!"',
      personality:
        "일반적으로 사람들이 생각하듯 야외에서 앙증맞은 나무 그림을 그리고 있는 그런 유형의 예술가는 아니지만, 진정한 예술가라고 할 수 있습니다. 심미안이나 디자인 감각, 심지어는 그들의 선택이나 행위를 통하여 사회적 관습이라는 한계를 뛰어넘고자 합니다. 실험적인 아름다움이나 행위를 통해 전통적으로 기대되는 행동양식이나 관습에 도전장을 내밉니다. 말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다. 의견 충돌을 피하고, 인화를 중시합니다. 인간과 관계되는 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한 경향이 있습니다. ",
      likes: "밝은 분위기, 실험적인 예술",
      dislikes: "감정에 휘둘리는 것",
      good: "북극곰, 눈사람",
      bad: "꼬마, 천사",
    },
    {
      id: "ISTJ",
      prefix: "크리스마스 트리가 되고픈",
      character: "소나무",
      message: '"꼬마전구랑 장식을 잔뜩 달고 싶어..!"',
      personality:
        "청렴결백하면서도 실용적인 논리력과 헌신적으로 임무를 수행하는 성격으로 묘사되기도 하는 이들은, 가정 내에서뿐 아니라 법률 회사나 법 규제 기관 혹은 군대와 같이 전통이나 질서를 중시하는 조직에서 핵심 구성원 역할을 합니다. 이 유형의 사람은 자신이 맡은 바 책임을 다하며 그들이 하는 일에 큰 자부심을 가지고 있습니다. 또한, 목표를 달성하기 위해 시간과 에너지를 허투루 쓰지 않으며, 이에 필요한 업무를 정확하고 신중하게 처리합니다.뭐든 쉽게 가정하여 결론 내리지 않는 이들은, 주변을 객관적으로 분석하고 사실에 입각하여 현실적으로 실행 가능한 계획을 세우는 것을 선호합니다. 허튼짓하는 것을 무엇보다도 싫어하는 사람으로 결정을 내린 후에는 목표를 달성하는 데 필요한 사실을 열거함으로써 다른 이들로 하여금 이를 재빨리 인지하여 즉시 실행해 옮기기를 독려합니다. 특히나 우유부단한 것을 몹시 싫어하며, 혹 결정 내린 실행안이 비현실적인 이유로 장애에 부딪혔을 때 쉬이 인내심을 잃기도 하는데, 특히 목표 달성에 필요한 핵심 세부사항을 놓치는 경우에는 더욱 그러합니다. 만일 마감 시간은 가까워져 오는데 논의가 성사되지 않은 채 시간만 질질 끄는 경우, 이들의 불편함 심기가 얼굴에 그대로 나타나기도 합니다.",
      likes: "한 가지 일에 집중하기, 목표와 계획 세우기",
      dislikes: "단체생활, 잡생각이 많아지는 날",
      good: "북극곰, 눈사람",
      bad: "루돌프, 북극여우",
    },
    {
      id: "ISTP",
      prefix: "장난감을 만드는",
      character: "엘프",
      message: '"어때? 마음에 들어?"',
      personality:
        "냉철한 이성주의적 성향과 왕성한 호기심을 가진 만능재주꾼형 사람은 직접 손으로 만지고 눈으로 보면서 주변 세상을 탐색하는 것을 좋아합니다. 무엇을 만드는 데 타고난 재능을 가진 이들은 하나가 완성되면 또 다른 과제로 옮겨 다니는 등 실생활에 유용하면서도 자질구레한 것들을 취미 삼아 만드는 것을 좋아하는데, 그러면서 새로운 기술을 하나하나 터득해 나갑니다. 종종 기술자나 엔지니어이기도 한 이들에게 있어 소매를 걷어붙이고 작업에 뛰어들어 직접 분해하고 조립할 때보다 세상에 즐거운 일이 또 없을 것입니다.만능재주꾼형 사람은 창조와 문제 해결을 위한 이해, 그리고 실행 착오와 실질적인 경험을 통해 아이디어를 탐색합니다. 다른 이들이 그들의 과제에 흥미를 보이는 것을 좋아하며, 간혹 다른 이들로 하여금 작업 중인 과제에 참여하도록 유도하기도 합니다. 단, 그들만의 원리원칙이나 자유를 침범하지 않는 범위에 한해서입니다.",
      likes: "모험과 스릴 즐기기, 도구를 다루기, 뚝딱뚝딱 만들기",
      dislikes: "다른 사람의 지나친 관심",
      good: "테디베어, 선물자루",
      bad: "루돌프, 꼬마",
    },
  ];
  const { state } = useContext(SituationContext);
  var MBTI =
    (state.E > 0 ? "E" : "I") +
    (state.N > 0 ? "N" : "S") +
    (state.F > 0 ? "F" : "T") +
    (state.J > 0 ? "J" : "P");

  const result = results.find((element) => element.id === MBTI);
  var imgsrc = "img/" + result.id + ".png";

  return (
    <div className="Result-wrapper">
      <div className="Result-card">
        <div>
          <DataConsumer>
            {({ state }) => (
              <div className="Result-main-title">{state.name} 님의 결과는</div>
            )}
          </DataConsumer>
        </div>
        <div className="Result-img-container">
          <img className="Result-img" alt="결과이미지" src={imgsrc}></img>
        </div>
        <div className="Result-content-container">
          <div className="Result-box">
            <div className="Result-message">{result.message}</div>
            <div className="Result-prefix">{result.prefix}</div>
            <div className="Result-title">{result.character}</div>
          </div>
          <div className="Result-text-box">
            <div className="Result-text-title">당신의 성격은</div>
            <div className="Result-text-content">{result.personality} </div>
          </div>
          <div className="Result-text-box likes">
            <div className="Result-text-title">이런 것을 좋아해요</div>
            <div className="Result-text-content">{result.likes}</div>
          </div>
          <div className="Result-text-box dislikes">
            <div className="Result-text-title">이런 것은 싫어해요</div>
            <div className="Result-text-content">{result.dislikes}</div>
          </div>
          <div className="Result-relation-box">
            <div className="Result-relation-container">
              <div className="Result-relation-title">잘 맞는 친구들</div>
              <div className="Result-relation-content">{result.good}</div>
            </div>
            <div className="Result-relation-container">
              <div className="Result-relation-title">안 맞는 친구들</div>
              <div className="Result-relation-content">{result.bad}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
