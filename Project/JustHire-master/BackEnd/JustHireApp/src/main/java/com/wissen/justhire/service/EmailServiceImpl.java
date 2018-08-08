package com.wissen.justhire.service;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.wissen.justhire.model.User;

@Service
public class EmailServiceImpl implements EmailService {

	/* (non-Javadoc)
	 * @see com.wissen.justhire.service.EmailService#sendEMail(java.lang.String)
	 */
	@Override
	public void sendEMail(String mailTO, User user) {

		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");
		props.put("mail.smtp.port", "587");
		Session session = Session.getInstance(props, null);

		try {
			MimeMessage msg = new MimeMessage(session);
			msg.setFrom("justhire.org@gmail.com");
			msg.setRecipients(Message.RecipientType.TO, mailTO);
			msg.setSubject("JustHire Bids Hello");
			msg.setSentDate(new Date());
			String body= "Hello "+user.getFirstName()+",\n \t You have been appointed as interviewer of Round "+user.getRound()+". "
					+ " Please visit the website and take interview.\n Your Login Credentials \n Username: "+user.getEmail()+" \n Password: wissen";
			msg.setText(body);
			Transport transport = session.getTransport("smtp");
			transport.connect((String) props.get("mail.smtp.host"),
					(Integer) Integer.parseInt((String) props.get("mail.smtp.port")), "justhire.org@gmail.com",
					"wissen@01");
			transport.sendMessage(msg, msg.getRecipients(Message.RecipientType.TO));
			transport.close();

		} catch (MessagingException mex) {

			System.out.println("send failed, exception: " + mex);
		}

	}

}
