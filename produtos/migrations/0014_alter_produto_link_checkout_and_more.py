# Generated by Django 4.2.3 on 2023-07-26 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0013_produto_link_youtube'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='link_checkout',
            field=models.CharField(default='', max_length=400),
        ),
        migrations.AlterField(
            model_name='produto',
            name='link_youtube',
            field=models.CharField(default='', max_length=400),
        ),
    ]
