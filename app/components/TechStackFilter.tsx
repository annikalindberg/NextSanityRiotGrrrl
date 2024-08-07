/* import { useState, useEffect } from 'react'

interface TechStackFilterProps {
  techStacks: string[]
  onFilterChange: (selectedStacks: string[]) => void
}
const TechStackFilter: React.FC<TechStackFilterProps> = ({
  techStacks,
  onFilterChange,
}) => {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([])

  useEffect(() => {
    onFilterChange(selectedStacks)
  }, [selectedStacks, onFilterChange])

  const toggleTechStack = (tech: string) => {
    setSelectedStacks(
      selectedStacks.includes(tech)
        ? selectedStacks.filter(t => t !== tech)
        : [...selectedStacks, tech]
    )
  }

  return (
    <fieldset>
      <legend>Filter by Tech Stack</legend>
      {techStacks.map((tech, index) => (
        <div key={index}>
          <input

            type="checkbox"
            id={`tech-${index}`}
            name="tech-stack"
            value={tech}
            onChange={() => toggleTechStack(tech)}
            aria-checked={selectedStacks.includes(tech) ? 'true' : 'false'} // replaced expression with 'true' or 'false' based on whether the tech is in the selectedStacks array or not
          />
          <label htmlFor={`tech-${index}`}>{tech}</label>
        </div>
      ))}
    </fieldset>
  )
}

export default TechStackFilter
 */
