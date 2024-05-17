import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { Importer, TextImporterFactory } from '@wisemapping/editor';
import React, { useContext } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { useMutation } from 'react-query';
import { ErrorInfo } from '../../../../classes/client';
import Input from '../../../form/input';
import BaseDialog from '../base-dialog';
import { ClientContext } from '../../../../classes/provider/client-context';

export type ImportModel = {
  title: string;
  description?: string;
  contentType?: string;
  content?: null | string;
};

export type CreateProps = {
  onClose: () => void;
};

type ErrorFile = {
  error: boolean;
  message: string;
};

const defaultModel: ImportModel = { title: '' };
const ImportDialog = ({ onClose }: CreateProps): React.ReactElement => {
  const client = useContext(ClientContext);
  const [model, setModel] = React.useState<ImportModel>(defaultModel);
  const [error, setError] = React.useState<ErrorInfo>();
  const [errorFile, setErrorFile] = React.useState<ErrorFile>({ error: false, message: '' });
  const intl = useIntl();

  const mutation = useMutation<number, ErrorInfo, ImportModel>(
    (model: ImportModel) => {
      return client.importMap(model);
    },
    {
      onSuccess: (mapId: number) => {
        window.location.href = `/c/maps/${mapId}/edit`;
      },
      onError: (error) => {
        setError(error);
      },
    },
  );

  const handleOnClose = (): void => {
    onClose();
    setModel(defaultModel);
    setError(undefined);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    mutation.mutate(model);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
    setModel({ ...model, [name as keyof ImportModel]: value });
  };

  const handleOnFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;
    const reader = new FileReader();

    if (files) {
      const file = files[0];
      // Closure to capture the file information.
      reader.onload = (event) => {
        // Suggest file name ...
        const fileName = file.name;
        if (fileName) {
          const title = fileName.split('.')[0];
          if (!model.title || 0 === model.title.length) {
            model.title = title;
          }
        }

        const extensionFile = file.name.split('.').pop();
        const extensionAccept = ['wxml', 'mm'];

        if (!extensionFile || !extensionAccept.includes(extensionFile)) {
          setErrorFile({
            error: true,
            message: intl.formatMessage(
              {
                id: 'import.error-file',
                defaultMessage: 'Import error {error}',
              },
              {
                error:
                  'You can import WiseMapping and Freemind maps to your list of maps. Select the file you want to import.',
              },
            ),
          });
        }

        model.contentType = 'application/xml';

        const fileContent = event?.target?.result;
        const mapConent: string | undefined =
          typeof fileContent === 'string' ? fileContent : fileContent?.toString();

        try {
          const importer: Importer = TextImporterFactory.create(
            extensionFile,
            mapConent ? mapConent : '',
          );

          importer.import(model.title, model.description).then((res) => {
            model.content = res;
            setModel({ ...model });
          });
        } catch (e) {
          if (e instanceof Error) {
            setErrorFile({
              error: true,
              message: intl.formatMessage(
                {
                  id: 'import.error-file',
                  defaultMessage: 'Import error {error}',
                },
                {
                  error: e.message,
                },
              ),
            });
          }
        }
      };

      // Read in the image file as a data URL.
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <BaseDialog
        onClose={handleOnClose}
        onSubmit={handleOnSubmit}
        error={error}
        title={intl.formatMessage({
          id: 'import.title',
          defaultMessage: 'Import existing mindmap',
        })}
        description={intl.formatMessage({
          id: 'import.description',
          defaultMessage:
            'You can import WiseMapping and Freemind maps to your list of maps. Select the file you want to import.',
        })}
        submitButton={intl.formatMessage({ id: 'import.button', defaultMessage: 'Create' })}
      >
        {errorFile.error && (
          <Alert severity="error">
            <p>{errorFile.message}</p>
          </Alert>
        )}
        <FormControl fullWidth={true}>
          <input
            accept=".wxml,.mm"
            id="contained-button-file"
            type="file"
            required={true}
            style={{ display: 'none' }}
            onChange={handleOnFileChange}
          />

          <Input
            name="title"
            type="text"
            label={intl.formatMessage({
              id: 'action.rename-name-placeholder',
              defaultMessage: 'Name',
            })}
            value={model.title}
            onChange={handleOnChange}
            error={error}
            fullWidth={true}
          />

          <Input
            name="description"
            type="text"
            label={intl.formatMessage({
              id: 'action.rename-description-placeholder',
              defaultMessage: 'Description',
            })}
            value={model.description}
            onChange={handleOnChange}
            required={false}
            fullWidth={true}
          />

          <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              style={{ margin: '10px 5px', width: '100%' }}
            >
              <FormattedMessage id="maps.choose-file" defaultMessage="Choose a file" />
            </Button>
          </label>
        </FormControl>
      </BaseDialog>
    </div>
  );
};

export default ImportDialog;
