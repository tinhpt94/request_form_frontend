import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import $ from 'jquery';

import FroalaEditor from 'react-froala-wysiwyg'
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'

import 'froala-editor/js/froala_editor.pkgd.min.js'

class Editor extends Component {
    constructor(props) {
        super(props);

        $.FroalaEditor.DefineIcon('insertInputField', {NAME: 'plus'});
        $.FroalaEditor.RegisterCommand('insertInputField', {
            title: 'Insert Input Field',
            focus: true,
            undo: true,
            refreshAfterCallback: true,
            callback: function () {
                this.html.insert('<input type="text" class="dotted-input" >');
            }
        });


        this.state = this._getState();
        this.handleContentChange = this.handleContentChange.bind(this);
	this.showPreview = this.showPreview.bind(this);
	this.hidePreview = this.hidePreview.bind(this);
    }

    _getState() {
        return {
	    showPreview: false,
            content: "",
	    config: {
		toolbarButtons: ['undo', 'redo' , 'bold', '|', 'alert', 'clear', 'insertInputField'
		}
        }
    }

    showPreview() {
        this.setState({
            showPreview: true
        })
    }

    hidePreview() {
        this.setState({showPreview: false})
    }

    handleContentChange(content) {
    	this.setState({content: content})
    }

    render() {
        return (
            <div>
		<FroalaEditor config={this.config}
			  model={this.state.content}
			  onModelChange={this.handleModelChange}
		/>
                <Modal {...this.props} show={this.state.showPreview} onHide={this.hidePreview} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Request Form Preview</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FroalaEditorView model={this.state.content}
                    </Modal.Body>
                </Modal>

              </div>
        )
    }
}

export default Editor;
