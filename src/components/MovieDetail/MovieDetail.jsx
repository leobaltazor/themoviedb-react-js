import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";

const MovieDetail = ({ open, close, mov }) => (
    <Modal open={open} dimmer="blurring" onClose={close}>
        <Modal.Header>{mov ? mov.title : ''}</Modal.Header>
        <Modal.Content image>
            <Image
                wrapped
                size="medium"
                src="/images/avatar/large/rachel.png"
            />
            <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                </p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default MovieDetail;
