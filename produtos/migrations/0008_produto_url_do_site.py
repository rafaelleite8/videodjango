# Generated by Django 4.2.3 on 2023-07-24 00:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0007_alter_produto_imagem_do_produto'),
    ]

    operations = [
        migrations.AddField(
            model_name='produto',
            name='url_do_site',
            field=models.CharField(default='', max_length=200),
        ),
    ]
