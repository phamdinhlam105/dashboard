import dynamic from 'next/dynamic';

const MyEditorWithNoSSR = dynamic(
  () => import('./rich-text-editor'),
  { ssr: false }
);

export default MyEditorWithNoSSR;
