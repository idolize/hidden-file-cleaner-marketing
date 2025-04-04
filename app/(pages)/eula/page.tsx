import EulaContent, { meta } from '@/app/content/eula.mdx';
import ProseDocument from '@/app/components/ProseDocument';

export default function Eula() {
  return (
    <ProseDocument title="End User License Agreement" meta={meta}>
      <EulaContent />
    </ProseDocument>
  );
}
