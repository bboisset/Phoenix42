import React from 'react';
import Image from 'next/image';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

import styles from './profilCard.module.css';

const ProfilCard = (props:ProfilCardProps) => {
    const {user} = props;

    const genAvatar = () => {
        return (
            <div className={styles.avatar}>
                <Image src={user.image_url} alt={user.login} width={200} height={200} />
            </div>
        )
    }

    const genOptions = () => {
        return (
            <div className={styles.options}>
                <span><b>{user.firstname} {user.lastname}</b>, alias <b>{user.login}</b></span>
                <FormControl component="fieldset" variant='standard'>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch />}
                            label="Je ne souhaite pas apparaître dans le classement Phoenix"
                        />
                        <FormControlLabel
                            control={<Switch />}
                            label="Lorem ipsum dolor sit amet"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        )
    }

    return (
        <div className={`card ${styles.profilCard}`}>
            {genAvatar()}
            {genOptions()}
        </div>
    );
};

interface ProfilCardProps {
    user: User;
}

export default ProfilCard;