import styled from "styled-components";

import Table from "@/components/common/Table";
import CustomCheckBox from "@/components/common/CheckBox";
import CustomButton from "@/components/common/Button";
import Header from "@/components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #e5e5e5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

interface User {
  key: string;
  name: string;
  age: number;
  address: string;
}

// 데이터 예시
const dataSource: User[] = [
  { key: "1", name: "John Doe", age: 32, address: "New York" },
  { key: "2", name: "Jane Smith", age: 28, address: "London" },
  { key: "3", name: "Mike Johnson", age: 40, address: "Sydney" },
];

// 테이블 컬럼 정의
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Title>Project setup</Title>
        <Button>test</Button>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
        <CustomCheckBox />
        <CustomButton
          isLoading={true}
          onClick={() => console.log("onclick button")}
        >
          test
        </CustomButton>
        <CustomButton
          variant="danger"
          onClick={() => console.log("onclick button")}
        >
          test1
        </CustomButton>
      </Container>
    </>
  );
}
