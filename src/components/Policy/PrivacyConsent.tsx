import styles from "./PrivacyConsent.module.scss";

export default function Header() {
  const PrivacyContent = `
제1조 (목적)
이 약관은 에서 운영하는 웹사이트(https://spacedesignx.com/,이하 "회사"라 한다)에서 제공하는 인터넷 관련 서비스 및 기타 부대서비스를 이용함에 있어 와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (정의)
1.회사 "회사"란 에서 운영하는 가상의 사업장(https://spacedesignx.com/)을 말하며, 아울러 가상의 사업장을 운영하는 사업자의 의미로도 사용합니다.
2.서비스 "서비스"란 '회사'가 제공하는 재화의 공급 및 용역이행을 말합니다.
3.이용자 '이용자'란 '회사'에 접속하여 이 약관에 따라 '회사'가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
4.회원 '회원'이라 함은 '회사'에 개인정보를 제공하여 회원등록을 한 자로서, '회사'의 정보를 지속적으로 제공받으며, '회사'가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
5.비회원'비회원'이라 함은 회원에 가입하지 않고 '회사'가 제공하는 서비스를 이용하는 자를 말합니다.

제3조 (약관의 명시와 개정)
1."회사"는 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 회사의 초기화면에 게시합니다.
2."회사"는 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
3."회사"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 회사의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
4."회사"가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 "회사"에 송신하여 "회사"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
5.이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다.

제4조 (서비스의 제공 및 변경)
1."회사"는 다음과 같은 업무를 수행합니다.
-인테리어철거 및 인테리어 설치 정보제공
-기타 "회사"가 정하는 업무
2."회사"는 재화의 품절 또는 기술적 사양의 변경 등 경우에는 장차 체결되는 계약에 의해 제공할 재화, 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화, 용역의 제공일자를 명시하여 현재의 재화, 용역의 내용을 게시한 곳에 그 제공일자 이전 7일부터 공지합니다.
3."회사"가 제공하기로 이용자와 이미 계약을 체결한 서비스의 내용을 재화의 품절 또는 기술적인 사유로 변경할 경우에는 "회사"는 이로 인하여 이용자가 입은 손해를 배상합니다. 단, "회사"의 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.
4."회사"는 제1항의 서비스 중 일부에 대한 서비스 이용시간을 별도로 정할 수 있으며, 이 경우 그 이용시간을 사전에 이용자에게 공지 또는 통지합니다.

제5조 (서비스의 중단)
1."회사"는 다음 각호에 해당하는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.
-"회사"가 사전에 이용자에게 공지하거나 통지한 경우
-컴퓨터등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 경우
-이용자의 서비스 이용 폭주 등으로 서비스 제공이 불가능한 경우
-설비 등을 긴급복구 하여야 할 경우
-기간통신사업자가 전기통신서비스를 중지한 경우
-기타 "회사"가 합리적으로 제어할 수 없는 경우 등
2."회사"는 1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단 "몰"에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.

제6조 (회원가입)
1.이용자는 "회사"가 정한 가입양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
2."회사"는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로 등록합니다.
-제7조 1항에 의거 회원탈퇴한 경우 탈퇴일로부터 6개월 이내
-가입신청자가 이 약관 제7조3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조3항에 의한 회원자격 상실후 3년이 경과한 자로서 "회사"의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
-등록 내용에 허위, 기재누락, 오기가 있는 경우
-기타 회원으로 등록하는 것이 "회사"의 기술상 현저히 지장이 있다고 판단되는 경우
3.회원가입계약의 성립시기는 "회사"의 승낙이 회원에게 도달한 시점으로 합니다.
4.회원은 제11조1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편 또는 기타 방법으로 "회사"에 대하여 그 변경사항을 알려야 합니다.

제7조 (회원 탈퇴 및 자격상실)
1.회원은 언제든지 "회사"에 탈퇴를 요청할 수 있으며 "회사"는 즉시 회원탈퇴를 처리합니다.
2.회원이 다음 각호의 사유에 해당하는 경우, "회사"는 회원자격을 제한 및 정지시킬 수 있습니다.
-가입 신청시에 허위 내용을 등록한 경우
-"회사"를 이용하여 구입한 서비스 등의 대금, 기타 "회사"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
-다른 사람의 "회사" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우
-"회사"를 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
3.가입 신청시에 허위 내용을 등록한 경우
4."회사"를 이용하여 구입한 서비스 등의 대금, 기타 "회사"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
5.다른 사람의 "회사" 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우
6."회사"를 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우

제8조 (회원에 대한 통지)
1."회사"가 회원에 대한 통지를 하는 경우, 회원이 "회사"에 제출한 전자우편 주소로 할 수 있습니다.
2."회사"는 불특정다수 회원에 대한 통지의 경우 1주일이상 "회사"에 게시함으로써 개별 통지에 갈음할 수 있습니다.

제9조 (서비스 이용/이용대금)
1.이용자가 서비스를 이용하기 위해서는 "회사"가 공지사항에 게시하거나 해당서비스 이용안내에서 제시하는 절차를 준수하여야 하며, 해당 서비스의 내용 및 책임한계 또한 공지사항에 게시된 내용 및 해당 서비스 이용안내에 따릅니다. 서비스이용신청은 반드시 실명으로 하여야 합니다.
2.서비스 이용대금은 "회사"가 공지사항에 게시하거나 해당 서비스 이용안내에서 제시하는 바에 따릅니다. "회사"가 제공하는 서비스는 그 이용대금을 별도 게시하거나 제시하지 않는 한 무료로 합니다.
3."회사"는 이용자가 구매신청한 재화 또는 용역이 품절등의 사유로 재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체없이 그 사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은 경우에는 그 사유발생일로부터 3일 이내에 계약해제 및 환급절차를 취합니다.
"회사"가 제공하는 유료 서비스 이용자 중 "회사"가 정한 부적절한 이용을 통한 이용정지 시에는 환불되지 않습니다.

제10조 (서비스 이용계약의 성립)
서비스 이용계약은 이용자의 서비스 이용신청시 성립합니다. 다만 아래의 경우 "회사"는 서비스 이용계약을 취소할 수 있습니다.

1.신청 내용에 허위, 기재누락, 오기가 있는 경우
2.기타 서비스를 제공하는 것이 "회사"의 기술상 현저히 지장이 있다고 판단하는 경우

제11조 (개인정보보호)
1."회사"는 이용자의 정보수집시 구매계약 이행에 필요한 최소한의 정보를 수집합니다. 다음 사항을 필수사항으로 하며 그 외 사항은 선택사항으로 합니다.
-성함 혹은 업체명
-지역
-연락처
-서비스유형
-사용자 구분(딜러, 개인)
2."회사"가 이용자의 개인식별이 가능한 개인정보를 수집한 때에는 반드시 당해 이용자의 동의를 받습니다.
3.제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "회사"가 집니다. 다만, 다음의 경우에는 예외로 합니다.
4.서비스이행을 위해 제휴서비스 제공에 필요한 최소한의 이용자의 정보를 제휴업체에 알려주는 경우
5.통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우
6.관계법령에 의한 경우
7."회사"가 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진등에관한법률 제16조3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.
8.이용자는 언제든지 "회사"가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "회사"는 이에 대해 지체없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "회사"는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
9."회사"는 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
10."회사" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체없이 파기합니다.

제12조 ("회사"의 의무)
1."회사"는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는 데 최선을 다하여야 합니다.
2."회사"는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을 갖추어야 합니다.

제13조 (회원의 ID 및 비밀번호에 대한 의무)
1.제11조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다.
2.회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
3.회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 "회사"에 통보하고 "회사"의 안내가 있는 경우에는 그에 따라야 합니다.

제14조 (이용자의 의무)
이용자는 다음 행위를 하여서는 안됩니다.
1.

제15조 ( 청약철회 등 )
1."회사"와 재화 등 서비스 이용에 관한 계약을 체결한 이용자는 계약 내용에 관한 서면을 받은 날 또는 회원가입 후 광고비 납입일로부터 7일 이내에는 청약의 철회를 할 수 있습니다.
2.이용자가 서비스를 전혀 이용하지 않고 7일 이내 청약철회 요청 시 결제대금을 전액 환불합니다. 단, 환급 시 소요되는 비용은 이용자가 부담합니다.
3.이용자가 서비스를 이용하고 청약철회 요청 시 결제대금에서 이용일수에 해당하는 금액과 총 이용 금액의 30%의 위약금을 공제한 후 환급합니다. 단, 서비스 이용 7일 이후 청약철회 요청 시 환급되지 않습니다.
4."회사"가 제공하는 서비스는 "콘텐츠산업진흥법" 및 "콘텐츠이용자보호지침"에서 규정하는 청약철회가 불가능한 서비스가 포함되어 있습니다. 이 경우 "회사"는 동 법에 따라 청약의 철회가 불가능한 서비스에 대한 사실을 해당서비스 이용안내에 포함한 경우 이용자의 청약철회권을 일부 제한 할 수 있습니다.

제16조 (연결 웹사이트와 피연결 웹사이트간의 관계)
1."회사"와 하위 "웹사이트"가 하이퍼 링크(예: 하이퍼 링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 웹사이트라고 하고 후자를 피연결 웹사이트라고 합니다.
2.연결 웹사이트는 피연결 웹사이트가 독자적으로 제공하는 재화 용역에 의하여 이용자와 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 연결웹사이트의 사이트에서 명시한 경우에는 그 거래에 대한 보증책임을 지지 않습니다.

제17조 (저작권의 귀속 및 이용제한)
1."회사"가 작성한 저작물에 대한 저작권 기타 지적재산권은 "회사"에 귀속합니다.
2.이용자는 "회사"를 이용함으로써 얻은 정보를 "회사"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.

제18조 (재판권 및 준거법)
1."회사"는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 최선을 다합니다.
2."회사"는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
3."회사"와 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.

제19조 (재판권 및 준거법)
1."회사"와 이용자간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. 다만, 서비스 이용시 관할법원에 대한 별도 합의가 있는 경우에는 이에 따릅니다.
2."회사"와 이용자간에 제기된 소송에는 한국법을 적용합니다.

부 칙
제1조 (시행일) 이 약관은 2024년 11월 21일부터 시행합니다.
    `;
  return (
    <textarea
      defaultValue={PrivacyContent}
      className={styles.textarea}
      readOnly
    ></textarea>
  );
}
