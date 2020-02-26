import React, { Fragment } from 'react';
import { Field, FieldArray } from 'formik';
import TextField from 'components/shared/TextField';
import CheckboxField from 'components/shared/CheckboxField';
import cmsGovernanceTeams from 'constants/enums/cmsGovernanceTeams';
import { SystemIntakeForm } from 'types/systemIntake';

type GovernanceTeamOptionsProps = {
  values: SystemIntakeForm;
  setFieldValue: (field: string, value: any) => void;
};
const GovernanceTeamOptions = ({
  values,
  setFieldValue
}: GovernanceTeamOptionsProps) => {
  return (
    <FieldArray name="governanceTeams.teams">
      {arrayHelpers => (
        <>
          {cmsGovernanceTeams.map(team => {
            const kebabValue = team.value.split(' ').join('-');
            return (
              <Fragment key={kebabValue}>
                <CheckboxField
                  checked={
                    values.governanceTeams.teams
                      .map(t => t.name)
                      .indexOf(team.value) > -1
                  }
                  disabled={values.governanceTeams.isPresent === false}
                  id={`governanceTeam-${kebabValue}`}
                  label={team.name}
                  name={team.name}
                  onBlur={() => {}}
                  onChange={e => {
                    if (e.target.checked) {
                      arrayHelpers.push({
                        name: e.target.value,
                        collaborator: ''
                      });

                      // Check parent radio if it's not already checked
                      if (!values.governanceTeams.isPresent) {
                        setFieldValue('governanceTeams.isPresent', true);
                      }
                    } else {
                      const index = values.governanceTeams.teams
                        .map(t => t.name)
                        .indexOf(e.target.value);

                      arrayHelpers.remove(index);
                    }
                  }}
                  value={team.value}
                />
                {values.governanceTeams.teams.map((t, index) => {
                  if (team.value === t.name) {
                    const id = t.name.split(' ').join('-');
                    return (
                      <div
                        key={`${id}-Collaborator`}
                        className="width-card-lg margin-top-neg-2 margin-left-3 margin-bottom-2"
                      >
                        <Field
                          as={TextField}
                          id={`IntakeForm-${id}-Collaborator`}
                          label="Collaborator Name"
                          maxLength={50}
                          name={`governanceTeams.teams[${index}].collaborator`}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </Fragment>
            );
          })}
        </>
      )}
    </FieldArray>
  );
};

export default GovernanceTeamOptions;
