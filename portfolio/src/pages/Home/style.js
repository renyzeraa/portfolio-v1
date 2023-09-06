import styled from 'styled-components'

export const Container = styled.div`

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .column {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media (min-width: 769px) {
  .container {
    display: flex;
  }

  .column {
    width: 50%; 
    padding: 20px;
  }
}

.column {
  border: 1px solid #ccc; 
}

.title {
  font-size: 24px;
}
`