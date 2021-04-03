export default function CharacterCount({ text }) {
  return (
    <p style={{ backgroundColor: '#F05945' }}>
      The text <strong>'{text}'</strong> has{' '}
      {text.length ? <strong>{text.length}</strong> : 'No'} characters.
    </p>
  );
}

// to use any javascript expression in react use {}
