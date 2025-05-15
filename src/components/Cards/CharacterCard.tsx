import {Link} from "react-router-dom";
import {formatDate} from "../../lib/utilities.ts";

import {Character} from "../../interfaces";
import {Button, Card, Text, Image} from "@mantine/core";
import classes from "./Card.module.css";

interface CharacterListCardProps {
    item: Character;
    routePrefix: string;
}

export function CharacterCard({item, routePrefix}: CharacterListCardProps) {
    return (
        <Card withBorder p={'md'} className={classes.card}>
            {item.image &&
                <Card.Section>
                    <Image src={item.image} alt={item.name}/>
                </Card.Section>
            }
            <Card.Section className={classes.section}>
                <Text fz={'lg'} fw={500}>{item.name}</Text>
                <Text fz="sm" mt="xs" mb={'sm'}>Создан: {formatDate(item.created)}</Text>
                <Button component={Link}
                        to={`/${routePrefix}/${item.id}`}>Подробнее</Button>
            </Card.Section>
        </Card>
    )
}
