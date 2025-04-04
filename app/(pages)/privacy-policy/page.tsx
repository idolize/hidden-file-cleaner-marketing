import PrivacyPolicyContent, { meta } from '@/app/content/privacy-policy.mdx';
import ProseDocument from '@/app/components/ProseDocument';

export default function PrivacyPolicy() {
  return (
    <ProseDocument title="Privacy Policy" meta={meta}>
      <PrivacyPolicyContent />
    </ProseDocument>
  );
}
