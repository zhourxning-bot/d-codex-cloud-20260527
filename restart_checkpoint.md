# Restart Checkpoint

Date: 2026-05-25

## Current Path State

- Docker original path: `C:\Users\zhourong\AppData\Local\Docker`
- Docker relocated path: `D:\Relocated\Docker`
- Docker backup path: `C:\Users\zhourong\AppData\Local\Docker_old`
- Docker link: `C:\Users\zhourong\AppData\Local\Docker` -> junction to `D:\Relocated\Docker`

- WPS cloud root registry:
  - `HKCU\Software\Kingsoft\wpscloud\usercenter\wpsdrive\driveRootPath = D:\WPSDrive`
  - `HKCU\Software\Kingsoft\wpscloud\usercenter\wpsdrive\NotLoginPagePath = D:\WPSDrive\NotLoginPage`

- WPS cloud cache path:
  - source: `C:\Users\zhourong\AppData\Local\Kingsoft\WPS Cloud Files`
  - destination candidate: `D:\Relocated\WPS Cloud Files`

## Notes

- Cloud-backed WPS files do not need to be fully downloaded locally; they can be re-fetched from the cloud later.
- The Docker move is the important completed move. The WPS cloud data is still a partial/local-cache situation.

## Rollback

1. Remove the Docker junction at `C:\Users\zhourong\AppData\Local\Docker`.
2. Rename `C:\Users\zhourong\AppData\Local\Docker_old` back to `C:\Users\zhourong\AppData\Local\Docker` if needed.
3. Restore WPS registry values for `driveRootPath` and `NotLoginPagePath` if you want the old local root back.
4. WPS cloud cache can be left to regenerate from the cloud if it needs to be reset.

## Docker UI Patch

- Original Docker Desktop bundle backup: `D:\codex_backups\docker-desktop\2026-05-25\app.asar.orig`
- Patched Docker Desktop bundle: `D:\codex_backups\docker-desktop\2026-05-25\app.asar.patched`
- The patch wraps React JSX creation to translate common Docker UI text into Chinese.
- If the patch misbehaves, restore `C:\Program Files\Docker\Docker\frontend\resources\app.asar` from `app.asar.orig`.
- Live install currently points to the patched bundle hash `EEB4D2ACB595F72DB8E1C559819F4545EB7CC7905B72FCCE2B736A0CE6A36C36`.
- To roll back, copy `D:\codex_backups\docker-desktop\2026-05-25\app.asar.orig` back to `C:\Program Files\Docker\Docker\frontend\resources\app.asar`, then restart Docker Desktop.
- The React JSX translation patch caused a render-time crash in Docker Desktop, so the live install has been restored back to the original `app.asar` hash `8112F9621434FBAE2DAE6D2BB325388719B8F566B0EA0F2D9E5349D267777D7E`.

- Safer DOM-based patch backup: `D:\codex_backups\docker-desktop\2026-05-25\app.asar.dompatch`
- This version keeps React element creation untouched and translates visible text nodes / selected attributes after render.
- Live install currently points to the DOM-patch bundle hash `674CD04E9A71F7D62D8C48A71E7595AC2786346DEA0C56A6D6C021C3F68FBA33`.
- To roll back this version, copy `D:\codex_backups\docker-desktop\2026-05-25\app.asar.orig` back to `C:\Program Files\Docker\Docker\frontend\resources\app.asar`, then restart Docker Desktop.

- Upgraded Docker backup after retry: `D:\codex_backups\docker-desktop\2026-05-25\app.asar.upgrade.orig`
- Current live install has been restored to the upgraded original hash `12C99AF36889124848CD45F4F871A1E57EBFD20FAE2C89307F8D405EFC5F8D96`
- The final safe JSX-string-only retry still resulted in an unstable/blank experience, so the live install was rolled back to the upgraded original bundle.
