import Loader from 'react-loader-spinner';
export default function LoaderSpin() {
  //other logic

  return (
    <Loader
      className="loader"
      type="Audio"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
}
