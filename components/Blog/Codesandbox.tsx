export default function Codesandbox({src}: {src: string}) {
  return (
    <iframe
      src={src}
      style={{
        width: '100%',
        height: '500px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
        marginTop: '3rem',
        marginBottom: '3rem',
      }}
      title="suspicious-cherry-2d9bc6"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
