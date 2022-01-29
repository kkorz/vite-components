import { Result, Button } from "@arco-design/web-react";

function NotFound() {
  return (
    <Result
      status="404"
      subTitle="Whoops, that page is gone. "
      extra={[
        <Button key="again" style={{ marginRight: 16 }}>
          Again
        </Button>,
        <Button key="back" type="primary">
          Back
        </Button>
      ]}
    />
  );
}

export default NotFound;
