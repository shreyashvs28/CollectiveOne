import React, { useState } from "react";
import Button from "../components/common/Button";
import BasicDetailsForm from "../components/setup/BasicDetailsForm";
import ExperienceDetailsForm from "../components/setup/ExperienceDetailsForm";
import SkillsSelectionForm from "../components/setup/SkillsSelectionForm";
import ReviewCard from "../components/setup/ReviewCard";
import { useInterview } from "../context/InterviewContext";

type Props = {
  onNext: () => void;
};

const SetupPage: React.FC<Props> = ({ onNext }) => {
  const {
    state,
    updateBasicDetails,
    updateExperience,
    updateSkills,
  } = useInterview();

  const [step, setStep] = useState(1);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div className="container mt-4">
      {step === 1 && (
        <BasicDetailsForm
          values={state.basicDetails}
          onChange={(field, value) =>
            updateBasicDetails({
              ...state.basicDetails,
              [field]: value,
            })
          }
        />
      )}

      {step === 2 && (
        <ExperienceDetailsForm
          values={state.experience}
          onChange={(field, value) =>
            updateExperience({
              ...state.experience,
              [field]: value,
            })
          }
        />
      )}

      {step === 3 && (
        <SkillsSelectionForm
          selectedSkills={state.skills}
          onToggleSkill={(skill) => {
            const updated = state.skills.includes(skill)
              ? state.skills.filter((s) => s !== skill)
              : [...state.skills, skill];
            updateSkills(updated);
          }}
        />
      )}

      {step === 4 && (
        <ReviewCard
          name={state.basicDetails.name}
          email={state.basicDetails.email}
          role={state.basicDetails.role}
          years={state.experience.years}
          skills={state.skills}
        />
      )}

      <div className="d-flex justify-content-between mt-4">
        {step > 1 && (
          <Button variant="secondary" onClick={back}>
            Back
          </Button>
        )}

        {step < 4 ? (
          <Button onClick={next}>Next</Button>
        ) : (
          <Button onClick={onNext}>
            Proceed to System Check
          </Button>
        )}
      </div>
    </div>
  );
};

export default SetupPage;
