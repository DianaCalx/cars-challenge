interface ConditionProp {
  condition: string
}

const Condition = ({condition}: ConditionProp) => (
  <div>
    {condition === 'A'
      ? 'Salvage Title'
      : condition === 'N'
      ? 'New'
      : 'N/A'
    }
  </div>
)

export default Condition