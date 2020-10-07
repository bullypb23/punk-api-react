import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0;
  max-width: 100vw;
`;

export const Container = styled.div`
  flex-basis: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

export const TableHeader = styled.div`
  flex: 1 1 100%;
  height: 100%;
  border: 1px solid #40514e;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color:  #c3c3c3;
`;

export const NameSection = styled.div`
  flex: 1 1 40%;
  height: 100%;
  padding: 10px;
`;

export const ImageSection = styled.div`
  flex: 1 1 20%;
  height: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const BrewedSection = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* border-right: 1px solid #40514e;
  border-left: 1px solid #40514e; */
`;

export const Section = styled.div`
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  color: #40514e;
  padding: 10px 0;
  ${props => props.center && 'text-align: center'};

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const TableFooter = styled.div`
  flex: 1 1 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #40514e;
`;

export const Select = styled.select`
  padding: 10px;
  outline: none;
  font-size: 1.2rem;
`;

export const Option = styled.option`
  padding: 5px;
`;

export const SelectContainer = styled.div`
  flex: 1 1 60%;

  @media (max-width: 576px) {
    flex: 1 1 50%;
  }
`;

export const ParagraphContainer = styled.div`
  flex: 1 1 40%;

  @media (max-width: 576px) {
    flex: 1 1 50%;
  }
`;

export const PaginationContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  > ul.pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    > li {
      flex-basis: 5%;
      height: 100%;
      border: 1px solid #40514e;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        height: 100%;
        color: #40514e;
        padding: 10px;
        font-size: 1.2rem;

        @media (max-width: 576px) {
          font-size: 1rem;
          padding: 5px;
        }
      }

      &.active {
        background-color: #40514e;

        a {
          color: #fff;
        }
      }

      &.disabled {
        border-color: #c3c3c3;

        a {
          color: #c3c3c3;
        }
      }
    }
  }
`;
