import {Link} from "react-router-dom";
import {formatDate} from "../../lib/utilities.ts";

import {Item} from "../../interfaces";
import {Button, Card, Text} from "@mantine/core";
import classes from "./Card.module.css";

interface DefaultListCardProps {
    item: Item;
    routePrefix: string;
}
export function DefaultCard ({ item, routePrefix}: DefaultListCardProps)  {
    return (
        <Card withBorder p={'md'} className={classes.card}>
            <Card.Section className={classes.section}>
                <Text fz={'lg'} fw={500}>{item.name}</Text>
                <Text fz="sm" mt="xs" mb={'sm'}>Создан: {formatDate(item.created)}</Text>
                <Button component={Link}
                        to={`/${routePrefix}/${item.id}`}>Подробнее</Button>
            </Card.Section>
        </Card>
    );
}