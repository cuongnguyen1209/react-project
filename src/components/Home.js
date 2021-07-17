import { Booking } from "./Booking";
import { Stay } from "./Stay";
import { Rating } from "./Rating";
import { Flight } from "./Flight";

export function Home() {
    return (
        <div>
            <Booking />
            <Flight />
            <Stay />
            <Rating />
        </div>
    )
}