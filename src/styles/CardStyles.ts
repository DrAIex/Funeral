import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 24px;
`;

export const CardHeader = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: #333333;
  margin: 0;
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const FieldRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`;

export const Label = styled.span`
  font-size: 13px;
  color: #656565;
  display: block;
  margin-bottom: 4px;
  margin-right: 20px;
  white-space: nowrap;
  width: 30%;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #333333;
  font-weight: 400;
`;

export const Field = styled.div`
  flex: 1;
  min-width: 200px;
`;

export const FieldValue = styled(Field)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 6px;
`;

export const TypeBadge = styled.div`
  border-radius: 4px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 8px;

  &:last-child {
    padding-right: 0;
  }
`; 