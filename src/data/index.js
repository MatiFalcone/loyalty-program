import mock from './mock';
import './notes/NotesData';
import './chat/ChatData';
import './contacts/ContactsData';
import './email/EmailData';
import './ticket/TicketData';

mock.onAny().passThrough();
