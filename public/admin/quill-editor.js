import CMS from 'decap-cms-app';
import Quill from 'quill';

const QuillEditor = {
    id: 'quill',
    label: 'Quill Editor',
    widget: 'string',
    control: class extends React.Component {
        componentDidMount() {
            this.quill = new Quill(this.container, { theme: 'snow' });
            this.quill.on('text-change', () => {
                const value = this.quill.root.innerHTML;
                this.props.onChange(value);
            });
        }

        render() {
            return <div ref={(el) => (this.container = el)} />;
        }
    },
    preview: (value) => <div dangerouslySetInnerHTML={{ __html: value }} />,
};

// Register the Quill Editor widget with Decap CMS
CMS.registerWidget(QuillEditor.id, QuillEditor.control, QuillEditor.preview);
