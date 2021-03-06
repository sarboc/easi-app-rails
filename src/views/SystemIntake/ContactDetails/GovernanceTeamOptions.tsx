import React, { Fragment } from 'react';
import { Field, FieldArray, FormikProps, getIn } from 'formik';

import CheckboxField from 'components/shared/CheckboxField';
import FieldErrorMsg from 'components/shared/FieldErrorMsg';
import FieldGroup from 'components/shared/FieldGroup';
import Label from 'components/shared/Label';
import TextField from 'components/shared/TextField';
import cmsGovernanceTeams from 'constants/enums/cmsGovernanceTeams';

import { ContactDetailsForm } from './index';

type GovernanceTeamOptionsProps = {
  formikProps: FormikProps<ContactDetailsForm>;
};

const GovernanceTeamOptions = ({ formikProps }: GovernanceTeamOptionsProps) => {
  const { values, errors } = formikProps;
  return (
    <FieldArray name="governanceTeams.teams">
      {arrayHelpers => (
        <fieldset className="margin-0 padding-0 border-0">
          <legend className="usa-sr-only">
            For the checkboxes below, select all the teams you&apos;ve
            collaborated with. Please disclose the name of the person on each
            team you&apos;ve worked with.
          </legend>
          {cmsGovernanceTeams.map((team: any, index: number) => {
            return (
              <Fragment key={team.key}>
                <CheckboxField
                  checked={values.governanceTeams.teams
                    .map(t => t.name)
                    .includes(team.value)}
                  disabled={values.governanceTeams.isPresent !== true}
                  id={`governanceTeam-${team.key}`}
                  label={team.label}
                  name={`governanceTeams.teams.${index}`}
                  onBlur={() => {}}
                  onChange={e => {
                    if (e.target.checked) {
                      arrayHelpers.push({
                        name: e.target.value,
                        collaborator: ''
                      });
                    } else {
                      const removeIndex = values.governanceTeams.teams
                        .map(t => t.name)
                        .indexOf(e.target.value);

                      arrayHelpers.remove(removeIndex);
                    }
                  }}
                  value={team.value}
                />
                {values.governanceTeams.teams.map((t, idx) => {
                  const { key } = team;
                  if (team.value === t.name) {
                    return (
                      <div
                        key={`${key}-Collaborator`}
                        className="width-card-lg margin-top-neg-2 margin-left-4 margin-bottom-2"
                      >
                        <FieldGroup
                          scrollElement={`governanceTeams.teams.${idx}.collaborator`}
                          error={false}
                        >
                          <Label
                            htmlFor={`IntakeForm-${key}-Collaborator`}
                            ariaLabel={`Enter ${team.acronym} Collaborator Name`}
                          >
                            {`${team.acronym} Collaborator Name`}
                          </Label>
                          {errors.governanceTeams &&
                            errors.governanceTeams.teams &&
                            errors.governanceTeams.teams[idx] && (
                              <FieldErrorMsg>
                                {getIn(
                                  errors,
                                  `governanceTeams.teams.${idx}.collaborator`
                                )}
                              </FieldErrorMsg>
                            )}
                          <Field
                            as={TextField}
                            error={getIn(
                              errors,
                              `governanceTeams.teams.${idx}.collaborator`
                            )}
                            id={`IntakeForm-${key}-Collaborator`}
                            maxLength={50}
                            name={`governanceTeams.teams.${idx}.collaborator`}
                          />
                        </FieldGroup>
                      </div>
                    );
                  }
                  return null;
                })}
              </Fragment>
            );
          })}
        </fieldset>
      )}
    </FieldArray>
  );
};

export default GovernanceTeamOptions;
