import Demo from '../../shared/components/Demo';
import { AppRegistry } from 'react-native';

export const getInitialProps = async ({ renderPage }) => {
  AppRegistry.registerComponent('demo', () => Demo);
  const page = await renderPage();
  return { ...page };
};

const index = () => {
  return <Demo />;
};

export default index;
