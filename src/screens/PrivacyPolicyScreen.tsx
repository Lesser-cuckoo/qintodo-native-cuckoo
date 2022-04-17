import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { PrimaryButton } from "src/components/ui/PrimaryButton";
import { MyPageHeader } from "src/components/MyPageHeader";

export const bgColor = {
  red: "#EF4444",
  blue: "#3B82F6",
  gray: "#F1F5F9",
  today: "#F43F5E",
  tomorrow: "#FB923C",
  other: "#FBBF24",
} as const;

type Props = {
  navigation: any;
};

const PrivacyPolicyScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <>
      <MyPageHeader title="プライバシーポリシー" navigation={navigation} />
      <View style={tw`flex-1 justify-center items-center bg-white `}>
        <ScrollView>
          <Text>
            合同会社Qin（以下「弊社」とします）は、個人情報が人格尊重の理念の下に慎重に取扱われるべきものであることに鑑み、個人情報を保護することが弊社の事業活動の基本であり、社会的責務であると認識し、以下の方針に基づき個人情報の保護に努めます。
            個人情報に関する法令などの遵守
            弊社は個人情報の保護に関する法令・ガイドラインを遵守して、ユーザーの個人情報を取扱います。
            個人情報の収集、利用目的
            弊社はユーザーのお名前、メールアドレスなどの個人情報を以下の目的で収集・利用いたします。なお、弊社は収集時の目的の範囲を超えて個人情報を利用する必要が生じた場合には、利用に先立ち、新たな目的をお知らせするものとします。
            本人確認のため サービスの提供のため
            ユーザーに対する必要事項の通知のため
            各種お問い合わせ対応、ユーザーサポートのため 個人情報の適正管理
            弊社は個人情報への不正アクセス、個人情報の紛失・破壊・改ざん・漏えいなどを防止するため、合理的な安全対策を講じると共に、必要な是正措置を講じます。
            個人情報の提供や委託について
            弊社は、ユーザーの個人情報を、以下のいずれかに該当する場合又はこのプライバシーポリシーに定める場合を除き、第三者に開示･提供することはありません｡
            ユーザーに事前の同意を得た場合
            弊社の業務の一部を受託した業務委託会社に対し、当該委託業務遂行のために必要な範囲で提供、開示する場合
            法令により開示を求められた場合
            裁判所、警察等の公的機関から開示を求められた場合
            なお、これらに該当した結果、ユーザーの個人情報を第三者に開示・提供することになった場合、弊社と第三者との間で、個人情報の管理、秘密保持、再提供の禁止等、ユーザーの個人情報の漏洩等を防止するために必要な事項を取り決め、適切な管理を実施させます。
            個人情報の開示・訂正・利用停止・苦情・問い合わせ
            ユーザーの個人情報の開示・訂正・利用停止などの手続き、及び、苦情・問い合わせなどにつきましては、お手数ですが下記のお問い合わせ窓口までご連絡下さい。
            窓口： Qin 運営チーム（support@qin.salon）
            プライバシーポリシーの改定等
            弊社は、ユーザーへの事前通知することなく、このプライバシーポリシーを変更、修正または改定できるものとします。変更、修正または改定後のプライバシーポリシーは、弊社サイト又はサービスへの掲載をもって発効するものとします。
            2021 年 10 月 1 日 改定
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export default PrivacyPolicyScreen;
