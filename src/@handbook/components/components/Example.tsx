import { CodeBlock } from '@handbook/code-block';
import { SourceModule } from '@handbook/source';
import { sampling } from '@handbook/typescript-source-sampler';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';
import { Language } from 'prism-react-renderer';
import React, {
  cloneElement,
  ComponentType,
  createElement,
  CSSProperties,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import styled from 'styled-components';
import { useHandbook } from '../context/handbook';
import { ReactComponent as VSCodeSvg } from './assets/vscode.svg';

interface Props {
  className?: string;
  style?: CSSProperties;
  example: SourceModule<{ default: ComponentType | string }>;
  api?: string[] | boolean;
  children?: ReactElement<{ children: ReactNode }>;
}

const VSCODE_KEY: string = '__handbook_vscode__';

const VSCodeIcon = createSvgIcon(createElement(VSCodeSvg), VSCodeSvg.displayName || 'VSCodeIcon');

export function ExampleBase({ example: { module, source, filename }, className, api, style, children }: Props) {
  const { github, vscode } = useHandbook();

  const [vscodeProject, setVSCodeProject] = useState<string>(() => localStorage.getItem(VSCODE_KEY) || '');
  const [project, setProject] = useState<string>(() => vscodeProject);
  const [open, setOpen] = useState<boolean>(false);

  const filteredSource: string = Array.isArray(api)
    ? Array.from(sampling({ source, samples: api }))
        .map(([, code]) => code)
        .join('\n\n')
    : source;

  return (
    <div className={className} style={style} data-file={filename}>
      {module &&
        isValidElement(children) &&
        cloneElement(children, {
          children: createElement(module.default),
        })}

      <div>
        <CodeBlock children={filteredSource} language={filename.split('.').reverse()[0] as Language} />

        <div>
          {github && (
            <IconButton
              href={`https://github.com/${github.repo}/blob/${github.branch}/src/${filename}`}
              target="_blank"
            >
              <GitHub />
            </IconButton>
          )}
          {vscode && vscodeProject.trim().length > 0 && (
            <IconButton
              href={`vscode://file${vscodeProject}/src/${filename}`}
              onContextMenu={(event) => {
                event.preventDefault();
                setOpen(!open);
              }}
            >
              <VSCodeIcon />
            </IconButton>
          )}
          {vscode && vscodeProject.trim().length === 0 && (
            <IconButton onClick={() => setOpen(!open)}>
              <VSCodeIcon />
            </IconButton>
          )}
        </div>
      </div>

      <Dialog
        aria-labelledby="vscode setting"
        aria-describedby="vscode setting..."
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
      >
        <DialogTitle>VSCode Configuration</DialogTitle>
        <DialogContent>
          <Typography style={{ wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>
            {github && (
              <>
                First, clone the{' '}
                <a href={`https://github.com/${github?.repo}`} target="_blank" rel="noopener noreferrer">
                  {github?.repo}
                </a>{' '}
                repository from Github.
                <br />
                And, change branch to "{github?.branch}".
                <br />
                Finally,{' '}
              </>
            )}
            Write your local directory path. (e.g. <code>/Users/username/Workspace/project</code>)
          </Typography>
          <TextField
            label="Project Path"
            variant="outlined"
            size="small"
            fullWidth
            style={{ marginTop: 20 }}
            value={project}
            onChange={(event) => setProject(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              setVSCodeProject(project);
              localStorage.setItem(VSCODE_KEY, project);
            }}
            color="primary"
            disabled={project.trim().length === 0}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const Example = styled(ExampleBase)`
  position: relative;

  pre.prism-code {
    overflow-y: auto;
    max-height: 350px;
  }

  > :last-child {
    position: relative;

    > :last-child {
      position: absolute;
      top: 10px;
      right: 10px;

      .MuiIconButton-label {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  > :nth-child(2) {
    margin-top: 10px;
  }
`;
